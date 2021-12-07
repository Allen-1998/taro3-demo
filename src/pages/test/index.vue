<template>
  <view class="index">
    <nut-button type="primary" @click="handleClick">点我</nut-button>
  </view>
</template>

<script lang="ts" setup>
function handleClick() {
  console.log(1111)
}
</script>

<style lang="scss">
.index {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
