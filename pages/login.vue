<template>
  <div class="login">
    <div class="log">
      <el-form
        :label-position="'top'"
        label-width="100px"
        :model="form"
      >
        <el-form-item label="Name">
          <el-input v-model="form.name" placeholder="Name" />
        </el-form-item>
        <el-form-item label="Password">
          <el-input v-model="form.password" placeholder="Password" />
        </el-form-item>
      </el-form>
      
      <template v-if="isLogin">
        <el-row justify="center">
          <el-button type="primary" :loading="loading" color="#626aef" @click="handleLogin">登录</el-button>
        </el-row>
        <el-row justify="center" style="margin-top: 12px">
          <el-button type="primary"  text @click="isLogin = false">前往注册</el-button>
        </el-row>
      </template>
      <template v-else>
        <el-row justify="center">
          <el-button type="primary" :loading="loading" color="#626aef" @click="handleRegister">注册</el-button>
        </el-row>
        <el-row justify="center" style="margin-top: 12px">
          <el-button type="primary"  text @click="isLogin = true">前往登录</el-button>
        </el-row>
      </template>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { login, register } from '@/api'
import { setLS } from '@/utils/storage'


const loading = ref(false)
const isLogin = ref (true)
const form = reactive({
  name: '',
  password: ''
})

const handleLogin = async () => {
  loading.value = true
  const { res } = await login(form)
  loading.value = false
  if (res) {
    ElMessage.success('登录成功')
    setLS('user', res)
    setLS('token', res.token)
    navigateTo('/')
  }
}

const handleRegister = async () => {
  loading.value = true
  const { res } = await register(form)
  loading.value = false
  if (res) {
    ElMessage.success('注册成功')
    setLS('user', res)
    setLS('token', res.token)
    navigateTo('/')
  }
}
</script>
<style lang="scss" scoped>
.login {
  .log {
    width: 340px;
    padding: 16px;
    background-color: #f6f8fa;
    margin: 120px auto 0;
    border-radius: 8px;
  }
}
</style>