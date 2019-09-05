<template>
    <transition  name="fade">
  <div class="home">
              <!---头部-->
      <mt-header fixed title="选择城市" class="city_header" :style="city_header">
          <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
      <!---主体-->
      <!--index.wxml-->
      <div class="Dang">
          <span>当前城市 :</span>
          <!---  <span class="Bei">{{cheng}}</span>--->
          <span class="Bei">北京</span>
      </div>
      <div class="home_top">

          <div v-for="(cit,index) in cityst" :key="index">
              <!--首字母-->
              <div class="Inde">{{index}}</div>
              <!--内容-->
              <div class="Xuan" >
                  <div v-for="item in cit" :key="item.id" class="Itme" @click="home_clik($event,item)"> <!---@click="Klpo" data-klp="{{item}}"-->
                      {{item.city_name}}
                  </div>
              </div>
          </div>
      </div>
  </div>
    </transition>
</template>

<script>
import { Header } from 'mint-ui';  //---局部引入mint-ui 头部
import Http from "@/Http.js";  //--引入http.js文件
export default {
  name: "home",
  components: {
      "mt-header": Header
  },
    data: function() {
        return {
            // 当前城市
            currCity: "北京",
            // 城市列表信息
            cityst: {},
            city_header: {
                "background-color": "white",
                color: "black",
                "border-bottom": "1px solid #090f14",
                fontSize:"25px",
            }
        };
    },
    methods:{
               //---获取城市列表
        homec(){
            Http.ciytc(rst => {
           //     console.log(rst)
                let {data:{citys}}=rst
                let komt={}
                for(let i=0;i<26;i++){ //--26个字母
                    let char=String.fromCharCode(65+i)
                    komt[char] = []  //--es6的属性名表达式
                }
                citys.forEach(val => {  //--循环遍历所有数据把对象的city_pre放到指定对象中
                    //--属性名表达式
                    komt[String(val.city_pre).toUpperCase()].push(val)
                })
                //---删除空数组数据
                for(let key in komt){
                    //--判断当前key是否为空
                    if(komt[key].length==0){
                        delete komt[key]
                    }
                }
                this.cityst=komt
        //     console.log(this.data.cityst)
            })
        },
        home_clik(ev,ite){
            console.log(ite)
            //this.$router.push({name:'Abotoste',params:{ct:ite}})
           this.$router.push({path:'Abotoste',query:{ct:ite}})

        }

    },
    beforeRouteEnter(to, from, next) {
        // ...
        console.log("city进入");
        next(vm => {});
    },
    beforeRouteLeave(to, from, next) {
        // ...
        console.log("city离开");
        next();
    },
    mounted() {
        // 调用城市列表数据
         this.homec()
    },
};
</script>
<style lang="less">
    .mint-header.is-fixed{
         width:100%;
         position: fixed;
         top:30px;
    }

    .home{
       // width:100%;
        height:100%;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: all 1s;
    }
    .fade-enter,
    .fade-leave-to{
        transform: translateX(-100%);
        opacity:0;
    }
    .home_top{
        height:calc(100% - 40px - 67px );
        width:100%;
        overflow-y: scroll;
        position: absolute;
        top:100px;
    }
.mintui {
    font-size:3rem !important;
}
.app_c{
    height:100%;
}

.Dang{
    display: flex;
    padding:10px;
    background-color:#600000;
    font-size:3rem;
    width:100%;
    position: absolute;
    top:30px;

}
.Bei{
    margin-left:10px;
    color:#FFD306
}
.Inde{
    margin-top:10px;
    background-color:#BEBEBE;
    font-size:3rem;
}
.Xuan{
    padding:8px;
    display:flex;
    flex-wrap:wrap;
    overflow-x: scroll;
}
.Itme{
    flex: 0 0 13rem;
    font-size:3rem;
}

</style>

