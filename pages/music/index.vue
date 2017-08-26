<template>
    <div id="tmp1">
      <input type="text" v-model='a'>
      <button @click=jia>++++</button>

      <div v-for='(item,index) in list' class='banner'>
        <img :src="item.pic" alt="">
      </div>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
      data () {
        return {
          list: ''
        }
      },
      created () {

      },
      methods: {
        jia () {
          this.$store.dispatch('jia')
        },
        getdata () {
          this.$ajax.get('http://localhost:3111/banner').then(e => {
            this.list = e.data.banners
          })
        }
      },
      computed: {
        a () {
          return this.$store.state.a
        }
      },
      asyncData (context) {
        return axios.get(`http://localhost:3111/banner`)
          .then((res) => {
            return { list: res.data.banners }
          })
          .catch((e) => {})
      }
    }
</script>
<style scoped>
.tmp1{
  margin-top: 100px;
}
  .banner img{
    width: 100%;
  }
</style>
