<template>
  <div id="app">
    <keep-alive include="home">
    <router-view class="app_c"></router-view>
    </keep-alive>
  </div>
</template>

<style lang="less">
 #app,.app_c{
  height:100%;
}
  .app_c{
    position: absolute;
    width:100%;
    top:0px;
    left:0px;
  }
</style>
