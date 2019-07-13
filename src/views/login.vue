<template>
    <div>
       <input type="text" v-model="user">
        <input type="text" v-model="pwd">
         
         <button @click="loginFn">登录</button>
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
            user:'',
            pwd:''
        
        }
    },
    computed:{

    },
    methods:{
     loginFn(){
            this.$router.go(-1)
            localStorage.setItem('useId',JSON.stringify(this.user))
          
     }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>