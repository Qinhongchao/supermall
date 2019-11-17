<template>
<div class="cart">
    <nav-bar class="nav-bar">
        <div class="center" slot="center">购物车({{cartListLength}})</div>
    </nav-bar>
    <cart-list class="cart-list" :cartList="cartList"></cart-list>
    <bottom-bar :cartList="cartList"></bottom-bar>
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import BottomBar from './childComps/BottomBar'
import CartList from './childComps/CartList'
import {
    mapGetters
} from 'vuex'
export default {
    name: "Cart",
    data() {
        return {}
    },
    computed: {
      
        ...mapGetters(['cartListLength','cartList']),

    },
    components: {
        NavBar,
        CartList,
        BottomBar
    }
}
</script>

<style scoped>
.cart {
    height: 100vh;
}

.nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
}

.cart-list {
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0px;
    left: 0px;
    overflow: hidden;
}
</style>
