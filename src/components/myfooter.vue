<template>
   <div class="footer">
        <ul>
           <router-link to="/" tag="li">首页</router-link>
           <router-link to="/order" tag="li">订单</router-link>
            <router-link to="/director" tag="li">发现</router-link>
             <router-link to="/my" tag="li">我的</router-link>
           
        </ul>
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
<style scoped lang="scss">
.footer{
      width: 100%;
      height: 50px;
      border-top: 3px solid skyblue;
      line-height: 50px;
      ul{
           display: flex;
          li{
            flex:3;
            text-align: center;
          }
      }
  }

  .router-link-exact-active{
     color:red;
  }
  
</style>