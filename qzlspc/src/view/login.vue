<template>
	<div class="login">
		<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="login-ruleForm">
		  <el-form-item label="账号" prop="count">
		    <el-input type="string" v-model="ruleForm2.count"></el-input>
		  </el-form-item>
		  <el-form-item label="密码" prop="pass">
		    <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
		    <el-button @click="resetForm('ruleForm2')">重置</el-button>
		  </el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default{
		name:'login',
		data() {
	      var validateCount = (rule, value, callback) => {
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
	      var validatePass = (rule, value, callback) => {
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
	      return {
	        ruleForm2: {
	          pass: '',
	          count:''
	        },
	        rules2: {
	          count: [
	            { validator: validateCount, trigger: 'blur' }
	          ],
	          pass:[
	          	{ validator: validatePass, trigger: 'blur' }
	          ]
	        }
	      };
	    },
	    methods: {
	      submitForm(formName) {
	        this.$refs[formName].validate((valid) => {
	          if (valid) {
	            console.log("提交成功");
	            //提交成功之后操作
	            let flag = true;
	            let islogin = localStorage.setItem('islogin',JSON.stringify(flag));
	            this.$router.push("/home");
	          } else {
	            console.log('error submit!!');
	            return false;
	          }
	        });
	      },
	      resetForm(formName) {
	        this.$refs[formName].resetFields();
	      }
	    }
	  }
</script>

<style scoped>
	.login{
		margin-top: 100px;
		margin-bottom: 100px;
	}
	.login-ruleForm{
		width: 500px;
		margin: 0 auto;
	}
</style>