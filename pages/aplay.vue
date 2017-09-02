<template>
  <div id="tmp1">
    <div class='show' @click='show()'></div>
    <div class='dw' :style='{width:showw+"%"}'>
    <div class='bg'></div>
    <div class='mb'>
      <div class='lr'>
        <img src="../static/bg5.jpg" alt="">
        <div class='btn' >
          <div :class='cals' @click='play()'></div>
          <div :class='cals2' @click='play()'></div>
        </div>
      </div>
      <div class='rb'>
        <div class='text' v-text='src.name'></div>
        <div class='jdt'></div>
        <div class='jdt2' :style='{width:width+"%"}'></div>
        <div class='jdt3'></div>
      </div>
      <span @click='next()'>
      </span>
    </div>
    </div>
    <audio :src="src.url" ref='audios' id='audiosss'>
    </audio>
  </div>
</template>
<script>
  var timer
    export default {
      props:['mid'],
        data() {
            return {
              src:'',
              cals:'play',
              cals2:'',
              isplay:false,
              width:0,
              nub:0,
              showw:100,
            }
        },
        created() {
          this.src = this.mid
        },
        beforeUpdate(){
        },
        methods: {
          play(){
              this.isplay = !this.isplay
            this.playstutas()
            var _this = this
            setTimeout(function () {
              _this.stop(!this.isplay)
            },1500)
          },
          stop(is,em){
            var _this = this
            var aus = document.querySelector('#audiosss')
            clearInterval(timer)
              if(is){
                  timer = setInterval(function () {
                      if(_this.width>100){
                        _this.width = 100
                        clearInterval(timer)
                      }
                    _this.width += 100/aus.duration
                  },1000)
              }else {
                  clearInterval(timer)
              }
          },
          playstutas(){
            if(this.isplay){
              this.cals = 'stop'
              this.cals2 = 'stop2'
              this.$refs.audios.play()
            }else {
              this.cals = 'play'
              this.cals2 = ''
              this.$refs.audios.pause()
            }
          },
          next(){
            this.nub++
            var ml = this.music.length
            this.src = this.music[this.nub%ml]
          },
          show(){
            this.showw = this.showw==100?0:100;
            this.isplay = true
            this.playstutas()
          }
        },
        computed:{
          music(){
            return this.$store.state.music
          }
        }


    }
</script>
<style scoped>
  audio{
    width: 0;
  }
  .show {
    width: 0.5rem;
    height: 0.5rem;
    position: fixed;
    bottom: 1.5rem;
    left: 0.1rem;
    line-height: 0.5rem ;
    border: 0.2rem solid #0dff89;
    border-color: transparent transparent transparent #0dff89;
    z-index: 55;
  }
  #tmp1 {
    padding-top: 0.65rem;
    padding-bottom:1.2rem;
    width: 100%;
  }
  #tmp1 span{
    width: 0.8rem;
    height: 0.8rem;
    position: absolute;
    right: 0.2rem;
    top: 0%;
    text-align: center;
    padding-top: 0.2rem;
  }
  #tmp1 span::after,#tmp1 span::before{
    content: ' ';
    display: inline-block;
    width: 0;
    border: 0.15rem solid #000;
    border-color: transparent transparent transparent #00d8bf;
  }
  .dw {
    position: fixed;
    bottom: 1.3rem;
    left: 0;
    transition:all 1s;
  }
  .mb{
    position: absolute;
    left: 5%;
    top: 0;
    height: 0.8rem;
    width: 90%;
    border-radius: 0.1rem ;
    overflow: hidden;
  }
  .lr {
    width: 1.2rem;
    height: 0.8rem;
    text-align: center;
    line-height: 0.8rem ;
    float: left;
    position: relative;
  }
  .rb{
    margin-left: 1.2rem;
    margin-right: 1rem;
    height: 100%;
    position: relative;
  }
  .lr>img{
    display: inline-block;
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 100%;
    margin-top: 0.05rem;
  }
  .play{
    display: inline-block;
    position: absolute;
    z-index: 3;
    border: 0.15rem solid #000;
    width: 0;
    height: 0;
    top: 50%;
    left:50%;
    margin-top: -0.15rem;
    margin-left: -0.05rem;
    border-color:  transparent transparent transparent #00d8bf;
  }
  .stop {
    display: inline-block;
    position: absolute;
    z-index: 3;
    width: 0;
    height: 0.3rem;
    border-left: 0.08rem solid #00d8bf;
    margin-left:-0.075rem;
    top: 17%;
  }
  .stop2{
    display: inline-block;
    position: absolute;
    z-index: 3;
    width: 0;
    height: 0.3rem;
    margin-left:0.025rem;
    top: 17%;
    border-left: 0.08rem solid #00d8bf;
  }
  .btn {
    width: 0.45rem;
    height: 0.45rem;
    position: absolute;
    left: 30%;
    top: 25%;
  }
  .jdt,.jdt2,.jdt3{
    position: absolute;
    width: 80%;
    height: 5px;
    top:50%;
    border-radius: 2px;
  }
  .jdt{
    background-color: #acacac;
  }
  .rb .text {
    font-size: 15px;
    color: #fff;
    width: 80%;
  }

  .qqq{
    font-size: 20px;
    position: absolute;
    top: 30px;
    left: 30px;
  }
  .bg{
    height: 0.8rem;
    width: 90%;
    margin:0 5%;
    border-radius: 0.1rem ;
    -webkit-filter: blur(1px);
    background: url('../static/bg8.jpg');
    filter: blur(1px);
    background-size: 100% 0.8rem;
  }
  .jdt2{
    background-color: #45d0f5;
    z-index: 5;
  }
</style>
