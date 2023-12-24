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
      <el-row justify="center">
        <el-button type="primary" :loading="loading" color="#626aef" @click="handleLogin">Login</el-button>
        <el-button type="primary" :loading="loading" color="#626aef" plain @click="handleRegister">Register</el-button>
      </el-row>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { login, register } from '@/api'
import { ElMessage } from 'element-plus'
const loading = ref(false)
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
  }
}

const handleRegister = async () => {
  loading.value = true
  const { res } = await register(form)
  loading.value = false
  if (res) {
    ElMessage.success('注册成功')
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