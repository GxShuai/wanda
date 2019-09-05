<template>
    <transition name="Abo_to">
    <div class="Abotoste">
        <!---头部-->
        <mt-header title="选择影院" :style="Abo_oste">
            <span slot="left" @click="protr">
                <mt-button icon="back"></mt-button>
            </span>
        </mt-header>
             <!--自动获取城市-->
        <router-link to="/">
   <div class="Jing" >{{zimu}}<span class="fa fa-angle-down"></span></div>
        </router-link>
            <!---实体内容--->
        <div class="Abo_zon" v-infinite-scroll="loadMore"
             infinite-scroll-disabled="loading"
             infinite-scroll-distance="10">

            <div v-for="(item,index) in arrc" :key="index" class="Cine"
                  @click="Bull"  >
              <!---  data-Buter="{{item}}"--->
                <div class="Name">
                    {{index+1}}.
                    {{item.cinemaName}}
                </div>
             <div class="Addre">{{item.address}}</div>
            </div>

        </div>

    </div>

    </transition>
</template>

<script>
    import { InfiniteScroll } from 'mint-ui';
    import Http from "@/Http.js";  //--引入http.js文件
    export default {
        name: "Abotoste",
        components: {

        },

        data: function() {
            return {
               loading:true,
                zimu:'11111',
                Abo_oste: {
                    "background-color": "white",
                    color: "black",
                    "border-bottom": "1px solid #090f14",
                    fontSize:"25px",
                },
                arrc:[],  //--空的数组
                totalpage:0, //--总页数
                currPage:0,  //--当前页数
            };
        },
        methods:{
            protr(){
              this.$router.go(-1)
            },
            Abot_ets(page){
             //  console.log(page)
                Http.cinem(page,(res) => {
                    let {data, totalpage}=res.data  //--解构赋值
                    let arr_ct=[]
                    arr_ct = arr_ct.concat(this.arrc, data) //---合并数据-this.data.arr原来数据--data---每次请求来的数据
                    this.arrc=arr_ct;
                    if (this.currPage == 0) this.loading = false;
                 //   console.log(this.arrc)
                    this.totalpage=totalpage;
                    this.currPage=this.currPage+1;
                })

            },
            Bull(){
                 this.$router.push({name:'Three'})
            },
            loadMore(){
                 if(this.currPage>=4){
                      this.loading=true
                     return
                 }
                this.Abot_ets(this.currPage)
            }
        },
        mounted(){
            this.zimu=this.$route.query.ct.city_name
//           console.log(this.$route.query.ct.city_name)
//            Http.cinem((res)=>{
//                console.log(res)
//            })
            this.Abot_ets(this.currPage)
        }

    };
</script>
<style lang="less">
    .Abotoste{
        height:100%;
    }
    .Abo_zon{
        position: absolute;
         height:calc(100%  -  40px  -  95px);
         margin-top:10px;
         width:100%;
        overflow-y: scroll;
    }
    .Abo_to-enter-active,
    .Abo_to-leave-active {
        transition: all 1s;
    }
    .Abo_to-enter,
    .Abo_to-leave-to{
        transform: translateX(100%);
        opacity:0;
    }
    .fa-angle-down{
        margin-top:10px;
    }
    .Jing{
        color:#FF7575;
        padding:10px;
        font-size:3rem;
        line-height:67px;
        background:#600000;
        display: flex;
    }
    .fa{
        margin-left: 2rem;
    }
    .Cine{
        background-color:	#F0F0F0;
        height:140px;
        padding:15px;
        margin-bottom:5px;
        display:flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .Addre{
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        /*margin-top:35rpx*/
    margin-top:35px;
        font-size:2rem;
        margin-left:25px;
}
.Name{
   color:#95CACA;
    font-size:2.8rem;
}

</style>

