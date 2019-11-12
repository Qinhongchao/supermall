<template>
<div class="detail">
    <detail-nav-bar></detail-nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3">
        <detail-swiper :topImages="topImages"></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop="shop"></detail-shop-info>
        <detail-goods-info :detailInfo="detailInfo"></detail-goods-info>
        <detail-param-info :paramInfo="paramInfo"></detail-param-info>
        <detail-comment-info :commentInfo="commentInfo"></detail-comment-info>
        <goods-list :goods="recommends"></goods-list>
    </scroll>
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
import {
    debounce
} from 'common/utils'
import {itemListenerMixin} from 'common/mixin'

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
        };
    },
    mixins:[
        itemListenerMixin
    ],
    created() {

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
        GoodsList
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
