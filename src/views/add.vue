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
        <li><button @click="add">完成</button></li>
    </ul>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    data(){
        return {
            obj:{
               name:"",
               age:"",
               sex:"",
               phone:""
            }
        }
    },
    methods:{
      ...mapActions(['addFn']),
      add(){
            this.addFn(this.obj)
            this.$router.go(-1)
      }
    }
}
</script>

