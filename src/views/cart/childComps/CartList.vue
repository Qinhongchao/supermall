<template>
<scroll class="cart-list-scroll">
<div>
    <cart-list-item v-for="item in cartList" :key="item.imgURL" :itemInfo="item"></cart-list-item>
</div>
</scroll>
</template>

<script>
import CartListItem from './CartListItem'
import Scroll from 'components/common/scroll/Scroll'
export default {
    name: "CartList",
    data() {
        return {}
    },
    computed: {
       
    },
    components: {
        CartListItem,
        Scroll
    },
     props: {
		cartList: {
		    type: Array,
        default() {
		      return []
        }
      }
    }
}
</script>

<style  scoped>

</style>
