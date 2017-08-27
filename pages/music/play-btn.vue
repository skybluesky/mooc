<template>
    <div id="tmp1">
      <div id='show'>
        <span @click='top()'>上一曲</span>
        <span @click='button()'>下一首</span>
        <span @click='stop()'>暂停</span>
        <span @click='play()'>开始</span>
        <plays :src='src' ref='play'></plays>
      </div>
    </div>
</template>
<script>
  import plays from './play.vue'
    export default{

        data: function () {
            return {
                src:'',
              nub:0
            }
        },
        created(){

        },
        methods: {
            play(){
                if(this.src==''){
                    this.src = this.music[this.nub]
                }
              this.$refs.play.$refs.play.play()
            },
          top(){
                this.nub--
                if(this.nub<0){
                    this.nub= this.music.length-1
                }
                this.src = this.music[this.nub]

          },
          button(){
            this.nub++
            if(this.nub>this.music.length-1){
              this.nub= 0
            }
            this.src = this.music[this.nub]
          },
          stop(){
            this.$refs.play.$refs.play.pause()
          }
        },
      computed: {
        music () {
          return this.$store.state.music
        }
      },
      components:{
        plays
      }
    }

</script>
<style scoped>
#show span{
  display: inline-block;
  width: 25%;
  height: 0.5rem;
  border: 1px solid skyblue;
  border-radius: 0.2rem;
  text-align: center;
  line-height: 0.5rem;
}
  #show {
    width: 100%;
    position: fixed;
    bottom: 2rem;
    left: 0rem;
  }
</style>
