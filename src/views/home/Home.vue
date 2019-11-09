<template>
    <div id="home">  
    <nav-bar class="home-nav">
        <div slot="center"> 购物车</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    </div>
</template>

<script >
import NavBar from 'components/common/navbar/NavBar';
import {getHomeMultiData} from "network/home.js";
import HomeSwiper from "./childComps/HomeSwiper"
import HomeRecommendView from "./childComps/HomeRecommendView"

export default {
    name: "",
    data() {
        return {
            result:null,
            banners:[],
            recommends:[]
        }
    },
    components: {
        NavBar,
       HomeSwiper,
       HomeRecommendView
    },
    created(){
        //请求多个数据
        getHomeMultiData().then(res=>{
            console.log(res);
            this.result=res;
            this.banners=res.data.banner.list;
            this.recommends=res.data.recommend.list;
        })
    },
    methods: {}
}
</script>

<style  scoped>

.home-nav{
    background-color: deeppink;
}
</style>
