<template>
    <div class="box">
      <my-header>
          <h4>订单</h4>
      </my-header>
     <div class="main"></div>

     <my-footer></my-footer>
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
    .box{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

        .main{
            flex: 1;
        }
    }
</style>