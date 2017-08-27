<template>
  <div id="app">
    <mt-header fixed title="skychen"></mt-header>
    <nuxt/>
    <mt-tabbar fixed>
        <nuxt-link to="/">
          <img src="../static/iO1.jpg" alt="">
          <p>综合</p>
        </nuxt-link>
        <nuxt-link to="/music">
          <img src="../static/iO2.jpg" alt="">
          <p>音乐</p>
        </nuxt-link>
        <nuxt-link to="/music">
          <img src="../static/iO3.jpg" alt="">
          <p>电影</p>
        </nuxt-link>
    </mt-tabbar>
  </div>
</template>
<script>
  export default {}
</script>
<style>

  .mint-tabbar a{
    flex: 1;
    text-align: center;
    height: 100%;
    text-decoration: none;
    background-color: #5fadc9;
    padding: 0.1rem 0;
  }
  .mint-header {
    height: 0.65rem;
  }
  #app .mint-tabbar {
    height: 1.2rem;
  }
  #app .mint-tabbar img {
    width:0.7rem;
    height: 0.7rem;
    border-radius: 0.17rem;
  }
  #app .mint-tabbar p {

  }
</style>
