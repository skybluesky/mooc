<template>
  <div class="container">
    <mt-swipe :auto="2500">
      <mt-swipe-item v-for='(item,index) in list'>
      <img :src="item.pic" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <div class='list'>
      <a class="item">
        <img src="../static/q1.jpg" alt="">
        <p>浏览器</p>
      </a>
      <a class="item">
        <img src="../static/q2.jpg" alt="">
        <p>设置</p>
      </a>
      <a class="item">
        <img src="../static/q3.jpg" alt="">
        <p>相机</p>
      </a>
      <a class="item">
        <img src="../static/q4.jpg" alt="">
        <p>电影</p>
      </a>
      <a class="item">
        <img src="../static/q5.jpg" alt="">
        <p>音乐</p>
      </a>
      <a class="item">
        <img src="../static/q6.jpg" alt="">
        <p>信息</p>
      </a>
      <a class="item">
        <img src="../static/q7.jpg" alt="">
        <p>地图</p>
      </a>
      <a class="item">
        <img src="../static/q8.jpg" alt="">
        <p>天气</p>
      </a>
      <a class="item">
        <img src="../static/q9.jpg" alt="">
        <p>时间</p>
      </a>
    </div>
  </div>
</template>

<script>

export default {
    data(){
        return {
            list : []
        }
    },
    components: {
    },
    created(){
          this.getdata()
    },
    methods:{
      getdata () {
        this.$ajax.get(`${this.$urls}/banner`).then(e => {
            this.list = e.data.banners.slice(0,4)
        })
      }
    }
}
</script>

<style>
.container
{
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  overflow: hidden;
  background: url('../static/bgc1.jpg') center no-repeat fixed;
  background-size: 7.6rem 12.2rem;
  padding-top: 0.65rem;
  padding-bottom:1.2rem;
  box-sizing: border-box;
}
.mint-swipe {
  height: 3.5rem;
}
.mint-swipe img{
  width: 100%;
  height: 3.5rem;
}
  .list{
    height: 7rem;
    margin-top: 0.5rem;
  }
.list a {
  display: inline-block;
  width: 33.33%;
  height: 2rem;

}
.list a:active{
  opacity: 0.7;
}
.list a>img {
  width:0.8rem;
  height: 0.8rem;
  border-radius: 0.19rem;
}
.list a>p {
  color: #f4f5f6;
  font-weight: 500;
  margin-top: 0.2rem;
}
</style>
