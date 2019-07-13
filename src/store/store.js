import Vue from "vue"

import Vuex from "vuex"

import axios from 'axios'
Vue.use(Vuex)

export default  new Vuex.Store({
    state:{
        list:[],
      
    },
    mutations:{//同步
     getList(state,data){
       state.list=data
     },
      //   添加
     addsync(state,obj){
           state.list.push(obj)
     },
     //  删除
     delsync(state,id){
        let index=state.list.findIndex(item=>item.id===id)
        state.list.splice(index,1)
     },
     //编辑
     editFn(state,data){
        let index=state.list.findIndex(item=>item.id===data.id*1)
         state.list.splice(index,1,data)
     } 
    },
    actions:{//异步
      conList({commit}){
        axios.get("/api/list").then(res=>{
              
             commit('getList',res.data)
            
        })
      },
    //   添加
      addFn({commit},obj){
        let data={
          "name":obj.name,
          "sex":obj.sex,
          "age":obj.age,
          "phone":obj.phone,
          "id":new Date().getTime()
    }
        axios.post("/api/add",data).then(res=>{
        
        console.log(data)
          commit('addsync',data)
        })
      },
       //  删除
       delFn({commit},id){
         axios.get(`/api/del?id=${id}`).then(res=>{
             if(res.data.code===1){
                 commit('delsync',id)
             }
             
         })
       },
       //编辑
       finishFn({commit},obj){
        axios.post('/api/edit',obj).then(res=>{
          if(res.data.code===1){
              console.log(res)
              commit('editFn',obj)
          }
        
      })
       }
       
    },
})