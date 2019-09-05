<template>
    <transition name="Thr_ee">
        <div class="Three">
           <h1>Three</h1>
            <button @click="kop">点击</button>
        </div>
    </transition>
</template>

<script>
    import { Header } from 'mint-ui';  //---局部引入mint-ui 头部
    import Http from "@/Http.js";  //--引入http.js文件
    export default {
        name: "Three",
        components: {

        },
        data: function() {
            return {

            };
        },
        methods:{
            kop(){
                this.$router.go(-1)
            }
        },
        beforeRouteEnter(to, from, next) {
            // ...
            console.log("city进入");
            next(vm => {});
        },
        beforeRouteLeave(to, from, next) {
            // ...
            console.log("1111city离开");
            next();
        },
        mounted() {
            // 调用城市列表数据

        },
    };
</script>
<style lang="less">
    .Thr_ee-enter-active,
    .Thr_ee-leave-active {
        transition: all 3s;
    }
    .Thr_ee-enter,
    .Thr_ee-leave-to{
        transform: translateX(-100%);
        opacity:0;
    }
    h1{
        float: right;
    }

</style>

