<template>
  <div>
    <router-view #="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>

<script setup>
</script>

<style lang="less" scoped>

</style>