/**
 * Created by Administrator on 2019/9/2.
 */


const HTM ='citys.php'

const CINEMA='cinemas.php'
/*
const SWPIRE ="getSwiper.php" //---轮播地址
const MOVIE_LIST = 'cinemasmovies.php'//电影院列表
const MOVEINFO='movieInfo.php' //---电影里数据
const PRODUCT = 'product.php' //---卖品数据
*/

import Vue from "vue";

class Http{


    static Berct = '/api/' //---路径 static静态。
    static common(reteh,data){
        return Vue.axios.get( `${this.Berct}${reteh}`,{params:data});
    }


    static ciytc(callback){
        //console.log(callback)
        this.common(HTM,{})
            .then(rst => {
                callback(rst)
            })
            .catch(err => {
                callback(err)
            })
            //---callback进行传值 传到别的页面
    }


    static cinem(page,callback){
         //  console.log(page)
        this.common(CINEMA,{page,size:20} ).then(rstc =>{
            callback(rstc);
    })
    }

    /*
    //--请求轮播图
    static Swpir(callback) {
        this.common(SWPIRE, {}, (ress) => {
            callback(ress)    //---callback进行传值 传到别的页面
        })
    }

    //--请求电影院列表
    static Movie_list(callback) {
        this.common(MOVIE_LIST, {}, (ress) => {
            callback(ress)    //---callback进行传值 传到别的页面
        })
    }

    //--请求电影里的数据
    static MoveInfo(callback) {
        this.common(MOVEINFO, {}, (resskp) => {
            callback(resskp)    //---callback进行传值 传到别的页面
        })
    }

    //--请求卖品里的数据
    static Procuct(callback) {
        this.common(PRODUCT, {}, (resskp) => {
            callback(resskp)    //---callback进行传值 传到别的页面
        })
    }
    */
}


 export default Http //---把方法暴露出去