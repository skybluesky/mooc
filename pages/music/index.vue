<template>
    <div id="tmp1">
      <div v-for='(item,index) in list' class='item'>
        <span>{{item.name}}</span>
        <em @click='addlist(item.id)'>xxxx</em>
      </div>
      <div id='show'>
        <span @click='play()'>上一曲</span>
        <span @click='play()'>下一首</span>
        <span @click='play()'>暂停</span>
        <span @click='play(audio)'>开始</span>
        <audio :src="src" controls="controls" id='audo'>
        </audio>
      </div>
    </div>
</template>
<script>

    export default {
      data () {
        return {
          list: [],
          msrc:[],
          src:''
        }
      },
      created () {
        this.getlist()
        var audio = document.querySelector('#audo')
      },
      methods: {
        addlist(id){
          this.$ajax.get(`${this.url}/music/url?id=${id}`).then(e=>{
            this.msrc.push(e.data.data[0].url)
            this.src = e.data.data[0].url
          })
          this.$store.dispatch('addlist',this.msrc)
        },
        getlist(){
          this.$ajax.get(`${this.url}/top/list?idx=1`).then(e=>{
              this.list = e.data.result.tracks.slice(0,20)
          })
        },
        play(audio){
            audio.paly()
        },
      },
      computed: {
        show () {
            return this.$store.state.show
        },
        url (){
            return this.$store.state.url
        },
        music(){
            return this.$store.state.music
        },
        show(){
          return this.$store.state.show
        }
      }
    }
</script>
<style scoped>
#tmp1{
  padding-top: 0.65rem;
  padding-bottom:1.2rem;
  box-sizing: border-box;
}
#tmp1 div {
  height: 0.35rem;
}
#tmp1>div>span {
  background-color: #e1e1e1;
}
#tmp1>div>em {
  background-color: deeppink;
}
  #show {
    width: 100%;
    height: 3rem;
  }
#show audio{
  width: 0;
}
</style>
