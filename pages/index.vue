<template>
  <div class="bg">home ==={{ msg }}

    <el-button @click="ElMessage('hello')">button</el-button>
  </div>
</template>
<script lang="ts" setup>
const msg = ref('msg9900')
</script>
<style lang="scss" scoped>
.bg {
}
</style>