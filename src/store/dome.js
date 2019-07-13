import Vue from 'vue'

import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        list:[],
    },
    mutations:{
        getList(state,data){
            state.list = data
        },
        addsync(state,obj){
            state.list.push(obj)
        },
        delsync(state,id){
            let index = state.list.findIndex(item=>item.id===id)
            state.list.splice(index,1)
        },
        editFn(state,data){
            let index = state.list.findIndex(item.id===data.id*1)
            state.list.splice(index,1,data)
        }
    },
    actions:{
        contList({commit}){
            axios.get("/api/list").then(res=>{
                commit('getList',res.data)
            })
        },
        addFn({commit},obj){
            let data = {
                "name":obj.name,
                "sex":obj.sex,
                "age":obj.age,
                "phone":obj.phone,
                "id":new Data().getTime()
            }
            axios.post("/api/add",data).then(res=>{
               commit('addsync',data) 
            })
        },
        delFn({commit},id){
         axios.get(`api/del?id=${id}`).then(res=>{
             if(res.data.code===1){
                commit('delsync',id)
             }
             
         })
        },
        finishFn({commit},obj){
            axios.post('api/edit',obj).then(res=>{
                if(res.data.code===1){
                    commit('editFn',obj)
                }
            })
        }
    }
})



