<template>
<div id="home">
    <nav-bar class="home-nav">
        <div slot="center"> 购物车</div>
    </nav-bar> 
    <tab-control v-show="isFixedTabControl" class="tab-control1" :titles="['流行','新款','精选']" @btnClick="tabClick" ref="tabControl1"></tab-control>
    <scroll class="content" ref="scroll" :probe-type="3"  @scroll="contentScroll" :pull-up-load="true" @loadMore="loadMore">
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <home-feature-view></home-feature-view>
    <tab-control class="tab-control2" :titles="['流行','新款','精选']" @btnClick="tabClick" ref="tabControl2"></tab-control>
    <goods-list :goods="showGoods" ></goods-list>
    </scroll>
    <back-top @click.native="backClick" :v-show="isShowBackTop"/>
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import Scroll from 'components/common/scroll/Scroll'
import TabControl from "components/content/tabControl/TabControl";

import HomeSwiper from "./childComps/HomeSwiper"
import HomeRecommendView from "./childComps/HomeRecommendView"
import HomeFeatureView from "./childComps/HomeFeatureView"
import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backtop/BackTop'

import {debounce} from 'common/utils'

import {
    getHomeMultiData,
    getHomeGoodsData
} from "network/home.js";

export default {
    name: "Home",
    data() {
        return {
            result: null,
            banners: [],
            recommends: [],
            currentType:'pop',
            goods: {
                "pop": {
                    "page": 0,
                    "list": []
                },
                "new": {
                    "page": 0,
                    "list": []
                },
                "sell": {
                    "page": 0,
                    "list": []
                },
            },
            bscroll:null,
            isShowBackTop:false,
            tabOffsetTop:0,
            isFixedTabControl:false,
            saveY:0,
            itemImgListener:null
            
        }
    },
    computed:{
        showGoods(){
            return this.goods[this.currentType].list;
        },
        
    },
    components: {
        NavBar,
        HomeSwiper,
        HomeRecommendView,
        HomeFeatureView,
        TabControl,
        GoodsList,
        Scroll,
        BackTop
        
    },
    created() {
        //请求多个数据
        this.getHomeMultiData();
        this.getHomeGoodsData('pop');
        this.getHomeGoodsData('new');
        this.getHomeGoodsData('sell');
       

    },
    mounted(){
    
     let newRefresh=debounce(this.$refs.scroll.refresh,500)
    this.itemImgListener=()=>{
        newRegresh(20,30,'abc');
    }
      this.$bus.$on("itemImageLoad",()=>{
           newRefresh();
        }); 
    
    
    },
    activated(){
        this.$refs.scroll.scroll.scrollTo(0,this.saveY,0);
    },
    deactivated(){
        this.saveY=this.$refs.scroll.scroll.y;

        this.$bus.$off('itemImgLoad',this.itemImgListener)
    },
    methods: {
        /* 事件监听相关方法 */
        tabClick(index){
            switch(index){
                case 0:
                    this.currentType="pop";
                    break;
                case 1:
                    this.currentType="new";
                    break;
                case 2:
                    this.currentType="sell";
                    break;
            }
            this.$refs.tabControl1.currentIndex=index;
            this.$refs.tabControl2.currentIndex=index;
           
        },
      
        backClick(){
            this.$refs.scroll.scroll.scrollTo(0,0,500);
        },
        contentScroll(position){
           this.isShowBackTop=(-position.y)>1000;
           this.isFixedTabControl=(-position.y)>this.$refs.tabControl2.$el.offsetTop
          
        },

        loadMore(){
            this.getHomeGoodsData(this.currentType);
            this.$refs.scroll.scroll.finishPullUp();
        },
      
        /* 网络请求相关方法 */
        getHomeMultiData() {
            getHomeMultiData().then(res => {
                console.log(res);
                this.result = res;
                this.banners = res.data.banner.list;
                this.recommends = res.data.recommend.list;
            });
        },
        getHomeGoodsData(type) {
            const page=this.goods[type].page+1;
            getHomeGoodsData(type, page).then((res) => {
                this.goods[type].list.push(...res.data.list); 
                this.goods[type].page++;
                
            })
        }


    }
}
</script>

<style scoped>
#home {
    padding-top: 44px;
    height: 100vh;
}

.tab-control1{
    position: absolute;
    right: 0;
    left: 0;
    top: 42px;
    z-index: 9;
}
.content{
   overflow:hidden;
   position: absolute;
   bottom: 49px;
   top: 44px;
   left: 0px;
   right: 0px;
   
}

.home-nav {
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9
}


</style>
