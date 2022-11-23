<template>
	<div class="login">
		<el-card class="box-card">
			<el-form :rules="rules"  :model="formInline" class="demo-form-inline">
				<el-form-item label="账号">
				  <el-input v-model="formInline.user" placeholder="请输入账号" />
				</el-form-item>
				<el-form-item label="密码">
				<el-input v-model="formInline.password" placeholder="请输入密码" type="password"></el-input>
				</el-form-item>
				<el-form-item>
				  <el-button type="primary" @click="onSubmit">登陆</el-button>
				</el-form-item>
			  </el-form>
		</el-card>
	</div>
</template>

<script setup>
import { reactive } from 'vue'
import router from '../router';

const formInline = reactive({
  user: '',
  password: '',
})
// 设置权限
const rules = reactive({
	user:[
		{
			required:true,//判断是否必填
			message:"纵昂是好人",
			type:"string",
			tigger:"change"
		}
	]
})

const onSubmit = () => {
  console.log('submit!');
//   跳转首页
  router.push('/main');
}
</script>

<style>
.login{
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>