<template>
<div>
    <nav-bar>
        <div slot="left" class="left" @click="back">
            <img src="~assets/img/common/back.svg">
        </div>
        <div slot="center" class="center">
            <div v-for="(item,index) in titles" :key="item" class="center-item"  :class="{active:currentIndex===index}" @click="currentIndex=index">{{item}}</div>
        </div>
    </nav-bar>
</div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
export default {
    name: 'DetailNavBar',
    data() {
        return {
            titles:['商品','参数','评论','推荐'],
            isActive:false,
            currentIndex:0
        };
    },
    components: {
        NavBar
    },
    methods:{
       back(){
           this.$router.go(-1);
       }
    }
};
</script>

<style scoped >
.left{
   padding-top: 5px;
}
.center{
    display: flex;
    font-size: 14px;
}

.center-item{
    flex: 1
}
.active{
    color: deeppink;
}

</style>
