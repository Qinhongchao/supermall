<template>
    <div>
       <detail-nav-bar></detail-nav-bar>
       <detail-swiper :topImages="topImages"></detail-swiper>
    </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import {getDetailById} from 'network/detail.js'
import DetailSwiper from './childComps/DetailSwiper'

export default {
    name:"Detail",
    data() {
        return {
            iid:"",
            topImages:[]
        };
    },
    mounted(){
       
        this.iid=this.$route.params.iid;
        getDetailById(this.iid).then((res)=>{
            this.topImages=res.result.itemInfo.topImages;
        });

    },
    components:{
        DetailNavBar,
        DetailSwiper
    }
};
</script>

<style scoped >

</style>

