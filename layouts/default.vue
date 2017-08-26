<template>
  <div id="app">
    <mt-header fixed title="fixed top"></mt-header>
    <nuxt/>
    <mt-tabbar>
        <nuxt-link to="/">首 页1</nuxt-link>
        <nuxt-link to="/music">首 页2</nuxt-link>
        <nuxt-link to="/music">首 页3</nuxt-link>
        <nuxt-link to="/">首 页4</nuxt-link>
    </mt-tabbar>
  </div>
</template>
<script>
  export default {}
</script>
<style>
html
{
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}
.button--green
{
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}
.button--green:hover
{
  color: #fff;
  background-color: #3b8070;
}
.button--grey
{
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}
.button--grey:hover
{
  color: #fff;
  background-color: #35495e;
}
.mint-tabbar{
  display: flex;
  height: 80px;
  background-color: #eee;
}
  .mint-tabbar a{
    flex: 1;
    text-align: center;
    line-height: 80px;
    text-decoration: none;
  }
  #app {
    padding-top: 50px;
    padding-bottom:80px;
  }
  .mint-tabbar {
    position: fixed;
    left: 0;
    bottom: 0;
  }
</style>
