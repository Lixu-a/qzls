<template>
	<div class="logReg">
	<!-- 登录 -->
		<div class="login" v-show="flag">
			<div class="login-title">登录</div>
			<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="login-ruleForm">
			  <el-form-item label="账号" prop="count2" >
			    <el-input type="string" v-model="ruleForm2.count2" placeholder="请输入您的账号"></el-input>
			  </el-form-item>
			  <el-form-item label="密码" prop="pass2">
			    <el-input type="password" v-model="ruleForm2.pass2" autocomplete="off" placeholder="请输入您的密码"></el-input>
			  </el-form-item>
			  <el-form-item>
			    <el-button type="primary" @click="submitForm2('ruleForm2')">提交</el-button>
			    <el-button  @click="resetForm2('ruleForm2')">重置</el-button>
			  </el-form-item>
			</el-form>
			<div @click="register()" class="toregister" >没有账号？<span>立即注册</span></div>
		</div>
		<!-- 注册 -->
		<div class="register" v-if="!flag">
			<div class="register-title">注册</div>
			<el-form :model="ruleForm1" status-icon :rules="rules1" ref="ruleForm1" label-width="100px" class="register-ruleForm">
			  <el-form-item label="账号" prop="count1">
			    <el-input type="string" v-model="ruleForm1.count1" placeholder="请输入您的账号"></el-input>
			  </el-form-item>
			  <el-form-item label="密码" prop="pass1">
			    <el-input type="password" v-model="ruleForm1.pass1" autocomplete="off" placeholder="请输入您的密码"></el-input>
			  </el-form-item>
			  <el-form-item label="确认密码" prop="checkPass">
			    <el-input type="password" v-model="ruleForm1.checkPass" autocomplete="off" placeholder="请确认您的密码"></el-input>
			  </el-form-item>
			  <el-form-item>
			    <el-button type="primary" @click="submitForm1('ruleForm1')">提交</el-button>
			    <el-button @click="resetForm1('ruleForm1')">重置</el-button>
			  </el-form-item>
			</el-form>
			<div @click="register()" class="toregister" >已有账号？<span>立即登录</span></div>
		</div>
	</div>
	
</template>

<script>
	export default{
		name:'logReg',
		data() {
			//登录账号验证
	      var validateCount2 = (rule, value, callback) => {
	        if (value === '') {
	          callback(new Error('请输入账号'));
	        } else {
	          if (value != "admin") {
	          	callback(new Error('账号不存在'));
	          }
	          //向后台请求验证账号是否存在
	          callback();
	        }
	      };
	      //登录密码验证
	      var validatePass2 = (rule, value, callback) => {
	        if (value === '') {
	          callback(new Error('请输入密码'));
	        } else {
	        if (value != "admin") {
	          	callback(new Error('密码不正确'));
	          }
	          //向后台验证，也可以不处理
	          callback();
	        }
	      };
	      //注册账号验证
	      var validateCount1 = (rule, value, callback) => {
	        if (value === '') {
	          callback(new Error('请输入账号'));
	        } else {
	          //向后台请求验证账号是否重复
	          callback();
	        }
	      };
	      //注册密码验证
	      var validatePass1 = (rule, value, callback) => {
	        if (value === '') {
	          callback(new Error('请输入密码'));
	        } else {
	          if (this.ruleForm1.checkPass !== '') {
	            this.$refs.ruleForm1.validateField('checkPass');
	          }
	          callback();
	        }
	      };
	      //注册密码确认
	      var validatePassCheck = (rule, value, callback) => {
	        if (value === '') {
	          callback(new Error('请再次输入密码'));
	        } else if (value !== this.ruleForm1.pass1) {
	          callback(new Error('两次输入密码不一致!'));
	        } else {
	          callback();
	        }
	      };
	      return {
	      	flag:true,//登录注册切换
	      	//登录账号密码
	        ruleForm2: {
	          count2:'admin',
	          pass2: 'admin'
	        },
	        //登录验证
	        rules2: {
	          count2: [
	            { validator: validateCount2, trigger: 'blur' }
	          ],
	          pass2:[
	          	{ validator: validatePass2, trigger: 'blur' }
	          ]
	        },
	        ruleForm1: {
	          count1: '',
	          pass1: '',
	          checkPass: ''
	        },
	        rules1: {
	          count1: [
	            { validator: validateCount1, trigger: 'blur' }
	          ],
	          pass1:[
	          	{ validator: validatePass1, trigger: 'blur' }
	          ],
	          checkPass: [
	            { validator: validatePassCheck, trigger: 'blur' }
	          ]
	        },
	      };
	    },
	    methods: {
	    	//登录提交
	      submitForm2(formName) {
	        this.$refs[formName].validate((valid) => {
	          if (valid) {
	            console.log("提交成功");
	            //提交成功之后操作
	            let flag = true;
	            this.$store.commit("login",flag);
	            this.$router.push('/home');
	            this.$message({
		          message: '恭喜，登录成功',
		          type: 'success'
		        });
		        //获取昵称并设置昵称
		        let nickname = 'admin';
		        this.$store.commit("nick",nickname);
	          } else {
	            this.$message({
		          message: '抱歉，登录失败',
		          type: 'warning'
		        });
	            return false;
	          }
	        });
	      },
	      //登录框重置
	      resetForm2(formName) {
	        this.$refs[formName].resetFields();
	      },
	      //注册提交
	      submitForm1(formName) {
	        this.$refs[formName].validate((valid) => {
	          if (valid) {
	            this.$message({
		          message: '恭喜，注册成功，请登录',
		          type: 'success'
		        });
	            this.flag = !this.flag;
	          } else {
	            this.$message({
		          message: '抱歉，注册失败',
		          type: 'warning'
		        });
	            return false;
	          }
	        });
	      },
	      //注册框重置
	      resetForm1(formName) {
	        this.$refs[formName].resetFields();
	      },
	       //切换登录注册
		    register() {
		    	this.flag = !this.flag;
		    }
	    },
	    mounted() {
	    	
	    }
	  }
</script>

<style scoped>
	.el-button--primary {
	    color: #fff;
	    background-color: rgba(254, 112, 26, 0.8);
	    border-color: rgba(254, 112, 26, 0.9);
	}
	.el-button:focus{
	    color: #333;
	    background-color: rgba(255, 255, 255, 0.1);
	    border-color: #dcdfe6;
	 }
	 .el-button:hover{
		color: rgba(254, 112, 26, 1);
	    background-color: rgba(255, 255, 255, 0.1);
	    border-color: rgba(254, 112, 26, 0.9);
	}
	.el-button--primary:hover {
	    color: #fff;
	    background-color: rgba(254, 112, 26, 0.8);
	    border-color: rgba(254, 112, 26, 0.9);
	}
	.el-button--primary:focus {
	    color: #fff;
	    background-color: rgba(254, 112, 26, 0.8);
	    border-color: rgba(254, 112, 26, 0.9);
	}
	.register,
	.login{
		margin-top: 100px;
		margin-bottom: 100px;
		padding: 40px 0px 40px 0;
		background-color: #fff;
		width: 600px;
		margin: 100px auto;
		border-radius: 8px;
		box-shadow: 0px 0px 100px  rgba(0,0,0,.1);
	}
	.register .register-title,
	.login .login-title{
		font-size: 1.65rem;
	    line-height: 60px;
	    font-weight: bold;
	    white-space: nowrap;
	    margin-bottom: 16px;
	    color: #555;
/*	    color: rgba(254, 112, 26, 0.8);*/
	}
	.register-ruleForm,
	.login-ruleForm{
		width: 500px;
		margin: 0 auto;
		padding: 0px 100px 0px 0;
	}
	.login .toregister{
		cursor: pointer;
	}
	.toregister span{
		color: blue;
	}
	/*注册*/
</style>