<template>
    <div>
       <detail-nav-bar></detail-nav-bar>
       <detail-swiper :topImages="topImages"></detail-swiper>
       <detail-base-info :goods="goods"></detail-base-info>
    </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import {getDetailById,Goods,Shop} from 'network/detail.js'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'

export default {
    name:"Detail",
    data() {
        return {
            iid:"",
            topImages:[],
            goods:null,
            shop:null
        };
    },
    mounted(){
       
        this.iid=this.$route.params.iid;
        getDetailById(this.iid).then((res)=>{
            console.log(res);
            this.topImages=res.result.itemInfo.topImages;
            this.goods=new Goods(res.result.itemInfo,res.result.columns,res.result.shopInfo.services);
            this.shop=new Shop(res.result.shopInfo);
        });

    },
    components:{
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo
    }
};
</script>

<style scoped >

</style>

