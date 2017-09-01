<template>
    <div id="tmp1">
      <div v-for='(item,index) in list' class='item'>
        <span>{{item.name}}</span>
        <em @click='addlist(item.id,item.name)'>播放</em>
      </div>
      <play :mid='obj'></play>
    </div>
</template>
<script>
  import play from '../aplay.vue'
    export default {
      data () {
        return {
          list: [],
          msrc:[],
          obj:{}
        }
      },
      created () {
        this.getlist()
      },
      methods: {
        addlist(id,name){
          this.$ajax.get(`${this.url}/music/url?id=${id}`).then(e=>{
                let datas = e.data.data[0]
              if(this.msrc.indexOf(datas)==-1){
                  datas.name = name
                this.obj = datas
                this.msrc.push(datas)
              }
          })
          this.$store.dispatch('addlist',this.msrc)
        },
        getlist(){
          this.$ajax.get(`${this.url}/top/list?idx=1`).then(e=>{
              this.list = e.data.result.tracks.slice(0,20)
          })
        }
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
      },
      components:{
        play
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
  height: 0.7rem;
}
#tmp1>div>span {
  background-color: #e1e1e1;
  font-size: 0.4rem ;
  margin-left: 0.5rem;
}
#tmp1>div>em {
  background-color: deeppink;
  font-size: 0.3rem ;
  float: right;
  border: 1px solid #eee;
  margin-right: 0.3rem;
}
  #show {
    width: 100%;
    height: 3rem;
  }
#show span {
  font-size: 0.4rem;
  margin-left: 0.2rem;
}
/*#show audio{*/
  /*width: 0;*/
/*}*/
</style>
