<template>
    <div id="tmp1">
        <audio :src="src" ref='play'  id='audo'>
        </audio>
    </div>
</template>
<script>
    export default{
        props:['src'],
        data: function () {
            return {

            }
        },
        created(){

        },
        methods: {},
      computed:{

      }
    }

</script>
<style scoped>
  .tmp1 #audo{
    width: 0;
  }
</style>
