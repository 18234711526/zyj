<template>
  <div id="app">
   
    <router-view class="main"></router-view>
   
  </div>
</template>
<script>
export default {
  props:{

  },
  components:{

  },
  data(){
    return {

    }
  },
  computed:{

  },
  methods:{

  },
  created(){

  },
  mounted(){

  }
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
html,body{
  width: 100%;
  height: 100%;
}
#app{
  width: 100%;
  height: 100%;
  
}
.main{
  flex: 1;
  overflow: auto;
}
</style>