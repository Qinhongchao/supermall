<template>
<div class="wrapper" ref="wrapper">
    <div >
        <slot></slot>
    </div>

</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: "scroll",
    props:{
        probeType:{
            type:Number,
            default(){
                return 3;
            }
        },
        pullUpLoad:{
            type:Boolean,
            default(){
                return false;
            }
        }
    },
    data() {
        return {
            scroll:null,
        
        }
    },
    mounted(){

        this.scroll=new BScroll(this.$refs.wrapper,{
            click:true,
            probeType:this.probeType,
            pullUpLoad:true
        });

        this.scroll.on('scroll',(position)=>{
           
            this.$emit('scroll',position);
        });

        this.scroll.on('pullingUp',()=>{
            this.$emit("loadMore");
           
        })
        
    }
}
</script>

<style  scoped>
</style>
