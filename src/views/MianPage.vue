<template>
    <div>
        <!-- <h1>我进来了哈哈哈</h1> -->
       <vHead></vHead> 
       <sideBar></sideBar>
         <div class="page">
          <router-view></router-view>
         </div>
    </div>
</template>

<script>
import  vHead  from '../components/loadinBar.vue'
import  sideBar from '../components/LeftBar.vue'

export default{
    data(){
        return{

        }
    },
    computed:{

    },
    components:{
        vHead,sideBar
    }

}

</script>

<style>
</style>