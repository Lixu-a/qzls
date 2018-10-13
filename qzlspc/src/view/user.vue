<template>
	<div class="user public-container">
		<!-- 左边选项卡 -->
		<div class="tab">
			<div class="head" >
				<img @click="exhiFun($event)" data-exhi="1" :src="imageUrl" alt="">
			</div>
			<div class="nickname">
				{{nickname}}
			</div>
			<ul class="tabPanel">
				<!-- <li class="home" @click="exhiFun($event)" data-exhi="2">首页</li> -->
				<!-- <li class="collection" @click="exhiFun($event)" data-exhi="3">我的收藏</li> -->
				<li class="edit" @click="exhiFun($event)" data-exhi="4">编辑资料</li>
				<li class="exit" @click="exitFun()">退出登录</li>
			</ul>
		</div>
		<!-- 右边面板 -->
		<div class="exhibition">
			<div class="head-exhi" v-show="exhi == 1">
				<!-- 标签页 -->
				<el-tabs v-model="activeName" @tab-click="handleClick" class="head-label">
				    <el-tab-pane label="修改头像" name="first">
				    <!-- 图片上传 -->
				    	<el-upload
						  class="avatar-uploader"
						  action="https://jsonplaceholder.typicode.com/posts/"
						  :show-file-list="false"
						  :on-success="handleAvatarSuccess"
						  :before-upload="beforeAvatarUpload">
						  <img v-if="imageUrl" :src="imageUrl" class="avatar">
						  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
						</el-upload>
				    </el-tab-pane>
				    <el-tab-pane label="修改昵称" name="second">
				    	<div class="nick">
				    		<label>
				    			 设置昵称：
				    			<input type="text" ref="nickname">
				    		</label>
				    		<div>
				    			<input @click="nickFun()" type="button" value="确认修改">
				    		</div>
				    	</div>
				    </el-tab-pane>
				    <el-tab-pane label="修改密码" name="third">
					    <div class="password">
					    	<label>
				    			 输入旧密码：
				    			<input type="text" v-model="oldpass">
				    		</label>
				    		<label>
				    			 设置新密码：
				    			<input type="password" v-model="newpass">
				    		</label>
				    		<label>
				    			 确认新密码：
				    			<input type="password" v-model="newpass2">
				    		</label>
				    		<div>
				    			<input @click="checkPass()" type="button" value="确认修改">
				    		</div>
				    		{{oldpass}}-{{newpass}}-{{newpass2}}
					    </div>
				    </el-tab-pane>
			  	</el-tabs>
			</div>
			<div class="home-exhi" v-show="exhi == 2">
				这里是展示区域home-exhi
			</div>
			<div class="collection-exhi" v-show="exhi == 3">
				这里是展示区域collection-exhi
			</div>
			<div class="edit-exhi" v-show="exhi == 4">
				这里是展示区域edit-exhi
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'user',
		data() {
			return {
				//切换展示哪一个
				exhi:1,
				nickname:'我的昵称',
				//用户头像上传
				imageUrl:'/static/images/default-avatar.png',
				//标签页
				activeName: 'first',
				oldpass:'',
				newpass:'',
				newpass2:''
			}
		},
		methods:{
			exitFun() {
				let flag = false
				this.$store.commit('login',flag);
				this.$router.push("/login");
				console.log("退出登录");
			},
			exhiFun(e) {
				this.exhi = e.target.dataset.exhi;
				console.log(this.exhi);
			},
			//用户头像上传
			handleAvatarSuccess(res, file) {
		        this.imageUrl = URL.createObjectURL(file.raw);
		        console.log(this.imageUrl);
		        this.$message({
		          message: '头像上传成功',
		          type: 'success'
		        });
		      },
		      beforeAvatarUpload(file) {
		        const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
		        const isLt2M = file.size / 1024 / 1024 < 2;

		        if (!isJPG) {
		          this.$message.error('上传头像图片只能是 JPG/PNG 格式!');
		        }
		        if (!isLt2M) {
		          this.$message.error('上传头像图片大小不能超过 2MB!');
		        }
		        this.$message({
		          message: '头像上传失败',
		          type: 'warning'
		        });
		        return isJPG && isLt2M;
		      },
		      // 标签页
		      handleClick(tab, event) {
		        console.log(tab, event);
		      },
		      //昵称修改
		      nickFun() {
		      	let nickname= this.$refs.nickname.value;
		      	if (nickname =='' || nickname == null || nickname == undefined) {
		      		this.$message({
			          message: '昵称不能为空',
			          type: 'warning'
			        });
		      		return
		      	}
		      	this.nickname = nickname;
		      	this.$store.commit('nick',nickname);
		      	this.$message({
		          message: '昵称修改成功',
		          type: 'success'
		        });
		      },
		      //密码修改
		      checkPass() {
		      	//判断是否为空
		      	if (this.oldpass == '' || this.oldpass == null || this.oldpass == undefined) {
		      		this.$message({
			          message: '请输入旧密码',
			          type: 'warning'
			        });
			        return
		      	}
		      	if (this.newpass == '' || this.newpass == null || this.newpass == undefined) {
		      		this.$message({
			          message: '请输入新密码',
			          type: 'warning'
			        });
			        return
		      	}
		      	if (this.newpass2 == '' || this.newpass2 == null || this.newpass2 == undefined) {
		      		this.$message({
			          message: '请再次输入新密码',
			          type: 'warning'
			        });
			        return
		      	}
		      	if (this.newpass !== this.newpass2) {
		      		this.$message({
			          message: '两次密码输入不一致',
			          type: 'warning'
			        });
			        return
		      	}
		      	//判断两次的新密码输入是否一样
		      	if (this.newpass == this.newpass2) {
		      		//把旧密码发送后端验证，判断旧密码是否输入正确,正确保存新密码，不正确返回值
		      		//修改成功重新登录
		      		let flag = false;
		      		this.$store.commit('login',flag);
		      		this.$router.push('/login');
		      		this.$message({
		      			message:"密码修改成功,请重新登录",
		      			type:'success'
		      		});
		      	}
		      }
		},
		mounted() {

		}
	}
</script>

<style scoped>
	.user{
		margin-top: 36px;
		margin-bottom: 36px;
		display: flex;
	}
	.tab{
		width: 150px;
		background-color: #fff;
		border: 1px solid #e6e5e5;
		border-radius: 3px;
		box-shadow: 0px 0px 20px rgba(0,0,0,.1);
	}
	.user .head{
		width: 100%;
		height: 80px;
		margin-top: 30px;
	}
	.user .head img{
		width: 80px;
		height: 80px;
		cursor: pointer;
	}
	.user .nickname{
		width: 130px;
		margin: 0 auto;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin-top: 15px;
		margin-bottom: 14px;
		font-weight: 600;
	}
	.user .tabPanel{

	}
	.user .tabPanel li{
		cursor: pointer;
		padding: 14px 0;  
	}
	.user .tabPanel li:hover{
		color: #FE701A;
	}
	/*这里是展示区域*/
	.exhibition{
		width: 1000px;
		/*height: 600px;*/
		margin-left: 30px;
		background-color: #fff;
		border: 1px solid #e6e5e5;
		border-radius: 3px;
		box-shadow: 0px 0px 20px rgba(0,0,0,.1);
	}
	.exhibition .head-exhi,
	.exhibition .home-exhi,
	.exhibition .collection-exhi,
	.exhibition .edit-exhi
	{
		width: 100%;
		height: 100%;
	}
	/*head-label*/
	.head-label{
		width: 90%;
		margin: 30px auto;
	}
	.head-label .avatar-uploader{
		width: 178px;
		background-color: rgba(0,0,0,0.05);
	}
	/*昵称修改*/
	.head-label .nick{
		font-size: 18px;
		text-align: center;
	}
	.head-label .nick label{
		display: block;
		margin-left: -96px;
		margin-top: 30px;
	}
	.head-label .nick label input{
		width: 244px;
		height: 40px;
		font-size: 17px;
		outline: none;
	}
	.head-label .nick div{
		display: block;
		text-align: center;
	}
	.head-label .nick div input{
		display: inline-block;
		width: 250px;
		height: 40px;
		line-height: 40px;
		margin-top: 20px;
		color: rgba(255,255,255,0.9);
		background-color: #FE701A;
		cursor: pointer;
		border: none;
		outline: none;
		font-size: 18px;
	}
	/*密码修改*/
	.head-label .password{
		font-size: 18px;
		text-align: center;
	}
	.head-label .password label{
		display: block;
		margin-left: -114px;
		margin-top: 30px;
	}
	.head-label .password label input{
		width: 244px;
		height: 40px;
		font-size: 17px;
		outline: none;
	}
	.head-label .password div{
		display: block;
		text-align: center;
	}
	.head-label .password div input{
		display: inline-block;
		width: 250px;
		height: 40px;
		line-height: 40px;
		margin-top: 20px;
		color: rgba(255,255,255,0.9);
		background-color: #FE701A;
		cursor: pointer;
		border: none;
		outline: none;
		font-size: 18px;
	}
	/*用户头像上传*/
	.avatar-uploader .el-upload {
	    border: 1px dashed #d9d9d9;
	    border-radius: 6px;
	    cursor: pointer;
	    position: relative;
	    overflow: hidden;
	  }
	  .avatar-uploader .el-upload:hover {
	    border-color: #409EFF;
	  }
	  .avatar-uploader-icon {
	    font-size: 28px;
	    color: #8c939d;
	    width: 178px;
	    height: 178px;
	    line-height: 178px;
	    text-align: center;
	  }
	  .avatar {
	    width: 178px;
	    height: 178px;
	    display: block;
	  }
</style>