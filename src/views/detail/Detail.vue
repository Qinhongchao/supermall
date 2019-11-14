<template>
<div class="detail">
    <detail-nav-bar ref='navbar' @changeIndex="changeIndex"></detail-nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
        <detail-swiper :topImages="topImages"></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop="shop"></detail-shop-info>
        <detail-goods-info ref="detailGoodsInfo" :detailInfo="detailInfo" @goodsInfoImgLoaded="goodsInfoImgLoaded"></detail-goods-info>
        <detail-param-info ref="detailParamInfo" :paramInfo="paramInfo"></detail-param-info>
        <detail-comment-info ref="detailCommentInfo" :commentInfo="commentInfo"></detail-comment-info>
        <goods-list ref="goodsList" :goods="recommends"></goods-list>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
</div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import {
    getDetailById,
    getRecommend,
    Goods,
    Shop,
    GoodsParam
} from 'network/detail.js'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import Scroll from 'components/common/scroll/Scroll'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import GoodsList from 'components/content/goods/GoodsList'
import {debounce} from 'common/utils'
import {itemListenerMixin} from 'common/mixin'
import DetailBottomBar from './childComps/DetailBottomBar'

export default {
    name: "Detail",
    data() {
        return {
            iid: "",
            res: {},
            topImages: [],
            goods: {},
            shop: {},
            detailInfo: {},
            paramInfo: {},
            commentInfo: {},
            recommends: [],
            itemImgListener: null,
            scrollParam:[],
            imgDebounce:null,
            currentIndex:0
        };
    },
    mixins:[
        itemListenerMixin
    ],
    created() {
        this.imgDebounce=debounce(()=>{
            this.debounceFunc();
        },200)
    },
    methods:{

        addToCart(){
            
             // 1.创建对象
        const obj = {}
        // 2.对象信息
        obj.iid = this.iid;
        obj.count=1;
        obj.imgURL = this.topImages[0]
        obj.title = this.goods.title
        obj.desc = this.goods.desc;
        obj.newPrice = this.goods.newPrice;
        // 3.添加到Store中
       
            this.$store.dispatch('addCart',obj);
        },

        changeIndex(index){
             this.$refs.scroll.scroll.scrollTo(0,-this.scrollParam[index],500);
             this.currentIndex=index;
        },

        debounceFunc(){
            this.scrollParam[0]=0;
            this.scrollParam[1]=this.$refs.detailParamInfo.$el.offsetTop;
            this.scrollParam[2]=this.$refs.detailCommentInfo.$el.offsetTop;
            this.scrollParam[3]=this.$refs.goodsList.$el.offsetTop;
            console.log(this.scrollParam);
        },

         goodsInfoImgLoaded(){
            this.imgDebounce();   
        },

        contentScroll(position){


            for(let i=0;i<this.scrollParam.length;i++){
    
                if(this.currentIndex!=i&&((i==this.scrollParam.length-1)&&-position.y>this.scrollParam[i])||(-position.y>=this.scrollParam[i]))
                {
                    this.currentIndex=i;
                    this.$refs.navbar.currentIndex=this.currentIndex;
                }
            }
            
        }
    },
    mounted() {
        this.iid = this.$route.params.iid;
        getDetailById(this.iid).then((res) => {
            this.res = res;
            this.topImages = res.result.itemInfo.topImages;
            this.goods = new Goods(res.result.itemInfo, res.result.columns, res.result.shopInfo.services);
            this.shop = new Shop(res.result.shopInfo);
            this.detailInfo = res.result.detailInfo;
            this.paramInfo = new GoodsParam(res.result.itemParams.info, res.result.itemParams.rule);
            if (res.result.rate.cRate !== 0) {
                this.commentInfo = res.result.rate.list[0];
            }

        });

        getRecommend().then((res) => {
            this.recommends = res.data.list;
        });


       

    },

   
    components: {
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailGoodsInfo,
        Scroll,
        DetailParamInfo,
        DetailCommentInfo,
        GoodsList,
        DetailBottomBar
    },


    deactivated() {

    },
    destroyed() {
        this.$bus.$off('itemImgLoad', this.itemImgListener)
    }

};
</script>

<style scoped>
.detail {
    height: 100vh;
    position: relative;
    z-index: 1;
    background-color: #fff;

}

.content {

    position: absolute;
    top: 44px;
    bottom: 60px;
}
</style>
