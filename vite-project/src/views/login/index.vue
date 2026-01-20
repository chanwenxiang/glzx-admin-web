<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" xs="0"></el-col>
      <el-col :span="12" xs="24">
        <el-form class="login_form" :model="loginFormData" :rules="rules" ref="loginFormRef" >
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item prop="username">
            <el-input v-model="loginFormData.username" placeholder="请输入用户名" :prefix-icon="User">
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="loginFormData.password" placeholder="请输入密码" show-password :prefix-icon="Lock">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="login_btn" :loading="loading" type="primary" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive,ref } from 'vue'
import useUserStore  from '@/store/modules/user'
import { useRouter } from 'vue-router'  
import { ElNotification } from 'element-plus'

let loginFormData = reactive({
  username: 'admin',
  password: '111111'
})
let loading = ref(false)
let userStore = useUserStore();
let router = useRouter();
// 获取表单ref
const loginFormRef = ref()

//定义校验规则
const rules = reactive({
  username: [
    {
      required: true, min: 5, max: 8, message: '用户名长度不小于5位，不大于8位', trigger: 'change'
    }
  ],
  password:[
    {
      required: true, min: 5, max: 8, message: '密码长度不小于5位，不大于8位', trigger: 'change'
    }
  ]
})


async function login() {
  //添加校验规则
  await loginFormRef.value.validate()
  loading.value = true
  //登录成功
  await userStore.userLogin(loginFormData).then(() => {
    loading.value = false
    router.push('/home')
    ElNotification({
      title: '登录成功',
      message: '欢迎回来',
      type: 'success' 
    })
  }).catch((err) => {
    loading.value = false
    //登录失败
    ElNotification({
      title: '登录失败',
      message: (err as Error).message,
      type: 'error'
    })
  })
}



</script>
<style scoped lang="scss">

  
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;


  .login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url('@/assets/images/login_form.jpg') no-repeat;
    background-size: cover;
    padding: auto;

    h1 {
      font-size: 40px;
      color: white;
      margin-top: 60px;
      
    }

    h2 {
      font-size: 40px;
      color: white;
    }

    .login_btn {
      width: 100%;
    }

  }
}
</style>