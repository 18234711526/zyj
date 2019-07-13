<template>
    <ul>
        <li>
            姓名：<input type="text" placeholder="请输入姓名" v-model="obj.name">
        </li>
        <li>
            年龄：<input type="text" placeholder="请输入年龄" v-model="obj.age">
        </li>
         <li>
            性别：<input type="text" placeholder="请输入年龄" v-model="obj.sex">
        </li>
        <li>
            电话：<input type="text" placeholder="请输入电话" v-model="obj.phone">
        </li>
          <li><button @click="finish(obj)">完成</button></li>
    </ul>
</template>
<script>
import axios from 'axios'
import {mapState,mapActions} from 'vuex'
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
           obj:{}
        }
    },
    computed:{
        ...mapState(['list'])
    },
    methods:{
        ...mapActions(['finishFn']),
        finish(obj){
             this.finishFn(obj)
             this.$router.go(-1)
        }
    },
    created(){
     let id = this.$route.params.id
      this.obj=this.list.find(item=>item.id===id)
      console.log(this.obj)
        
    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>