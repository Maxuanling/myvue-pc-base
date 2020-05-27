/*
 * @Description: 
 * @Version: 1.0
 * @Autor: 杨兰
 * @Date: 2020-03-26 11:25:58
 * @LastEditors: 马璇玲
 * @LastEditTime: 2020-05-21 15:30:58
 */
// const path = require("path");
// function resolve(dir){
//     return path.resolve(_dirname,dir);
// }

let subjectTarget = 'http://onlineschoolapi.beta.hqjy.com/';

module.exports = {
    configureWebpack:{
        resolve:{
            alias:{
                "assets":"@/assets",
                "common":"@/common",
                "components":"@/components",
                "network":"@/network",
                "views":"@/views",
                "utils":"@/utils",
            }
        }
    },
    devServer: {
        open: true,//浏览器自动打开页面
        host: 'localhost',
        port: 8080,
        https: false,
        proxy: {//配置跨域
            '/subject': {
                target: subjectTarget,//跨域地址
                changeOrigin: true,//允许跨域
                pathRewrite: {
                  '^/subject': '/onlineschool',
                }
            },
        }
    }
}