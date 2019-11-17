<template>
    <div class="toast" v-if="isShow">
        <span  >{{msg}}</span>
    </div>
</template>

<script>
export default {
    name:'Toast',
    data() {
        return {
            msg:"",
            isShow:false
        };
    },
    methods:{
        show(message,duration){
            this.msg=message;
            this.isShow=true;
            setTimeout(()=>{
                this.isShow=false;
                this.msg="";
            },duration)
        }
    }
    
};
</script>

<style scoped >
.toast{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 999;
    background-color:black;
    font-size: 18px;
    color: aliceblue;
    padding: 8px 10px;
    
}
</style>
