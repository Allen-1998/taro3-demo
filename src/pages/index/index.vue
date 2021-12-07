<template>
  <view class="index">
    {{ state.msg }}
    <view class="btn">
      <nut-button type="primary" @click="handleClick('text', state.msg2, true)">点我</nut-button>
    </view>
    <nut-toast
      v-model:visible="state.show"
      :msg="state.msg"
      :type="state.type"
      :cover="state.cover"
    />
  </view>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import Taro from '@tarojs/taro'
console.log(process.env.NODE_ENV)
const state = reactive({
  msg: '欢迎使用 NutUI3.0 开发小程序',
  msg2: '你成功了～',
  type: 'text',
  show: false,
  cover: false,
})
function handleClick(type, msg, cover = false) {
  state.show = true
  state.msg2 = msg
  state.type = type
  state.cover = cover
  Taro.navigateTo({
    url: '/pages/test/index',
  })
}
</script>

<style lang="scss">
.index {
  margin-top: 200px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
