<template>
<div class="wrapper">
    <ul class="content">
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
        <li>AAAA</li>
    </ul>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: "Category",
    data() {
        return {
            bscroll: null
        }
    },
    mounted() {
        this.bscroll = new BScroll(document.querySelector('.wrapper'), {
            probeType: 3,
            click: true,
            pullUpLoad: true,
        });
        this.bscroll.on('scroll', (position) => {

        });
        this.bscroll.on('pullingUp', () => {
            console.log("loading");
            setTimeout(() => {
                this.bscroll.finishPullUp();
            }, 1000)

        })
    },
    created() {

    },
    components: {

    }
}
</script>

<style scoped>
.wrapper {
    background: red;
    height: 400px;
    overflow: hidden;

}

.content {}
</style>
