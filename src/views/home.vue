<template>
    <div class="box">
      <my-header>
          <h4>首页</h4>
      </my-header>
     <div class="main">
         <div class="txt">
         <ul  v-for="(item,index) in list" :key="index">
             <li>{{item.name}}</li>
             <li>{{item.sex}}</li>
             <li>{{item.age}}</li>
             <li>{{item.phone}}</li>
            
             <li><button @click="$router.push({name:'detil',params:{id:item.id}})">编辑</button><button @click="del(item.id)">删除</button></li>
         </ul>
         <button class="cont" @click="$router.push('/add')">新增</button>
         </div>
     </div>

     <my-footer></my-footer>
    </div>
</template>
<script>
import {mapActions,mapState} from 'vuex'
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
     ...mapState(['list'])
    },
    created(){
      this.conList()
    },
    methods:{
      ...mapActions(['conList',"delFn"]),
      del(id){
       this.delFn(id) 
      },
    
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

            .txt{
                ul{
                    width: 100%;
                    height: 45px;
                    background: skyblue;
                    display: flex;
                    margin-top: 30px;
                    li{
                        line-height: 45px;
                        flex: 2;
                    }
                }
                .cont{
                   width: 40%;
                   height: 45px;
                   background: red;
                   text-align: center;
                   left: 45px;
                   outline: none;
                   border: none;
                 margin-left: 100px;
                 margin-top: 20px;
                }
            }
        }
    }
</style>