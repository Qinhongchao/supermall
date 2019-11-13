<template>
<div class="cart">
    <nav-bar class="nav-bar">
        <div class="center" slot="center">购物车({{cartListLength}})</div>
    </nav-bar>
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {mapGetters} from 'vuex'
export default {
    name: "Cart",
    data() {
        return {}
    },
    computed:{
       ...mapGetters(['cartListLength'])
    },
    components: {
        NavBar
    }
}
</script>

<style scoped>
.nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
}
</style>
