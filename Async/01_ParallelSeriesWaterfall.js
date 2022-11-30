const async = require("async");
const fs = require("fs")
// 

// const callback=(err,data)=>{
//     if(err)
//     {
//         console.log(err)
//     }
//     else{
//         console.log(data)
//     }
// }
// async.series({
//   add:(callback)=>{
//     setTimeout(function(){
//       callback(null,"Hi i am cool")
//     },5000)
//   },
//   sub:(callback)=>{
//     setTimeout(function(){
//       callback(null,"in sub")
//     },1000)
//   },
//   mult:(callback)=>{
//     setTimeout(function(){
//       callback(null,"in mult")
//     },100)
//   },
//   div:(callback)=>{
//     setTimeout(function(){
//       callback(null,"in div")
//     },3000)
//   }
// },callback
// )

// async.parallel({
//   add:(callback)=>{
//     setTimeout(function(){
//       callback(null,"Hi i am cool")
//     },5000)
//   },
//   sub:(callback)=>{
//     setTimeout(function(){
//       callback(null,"in sub")
//     },1000)
//   },
//   mult:(callback)=>{
//     setTimeout(function(){
//       callback(null,"in mult")
//     },100)
//   },
//   div:(callback)=>{
//     setTimeout(function(){
//       callback(null,"in div")
//     },3000)
//   }
// },callback
// )



// async.waterfall([
//   function add(callback){
//     let a=2
//     callback(null,a)
//   },
//   function two(data1,callback)
//   {
//     let b=59+data1
//     callback(null,b)
//   },
//   function three(data2,callback){
//     callback(null,data2)
//   }
// ],callback)



// async.waterfall([
//   fu
// ],callback)


// async.parallel([
//   function add(callback){
//     setTimeout(function(){
//       callback(null,"In add")
//     },5000)},
//   function sub(callback){
//     setTimeout(function(){
//       callback(null,"In sub")
//     },4000)},
//   function mult(callback){
//     setTimeout(function(){
//       callback(null,"In mult")
//     },2000)
//   }
// ],callback)


// async.waterfall([
//   function add(callback){
//     let a = 2
//     callback(null,a)
//   },
//   function addOne(data1,callback){
//     let b=2
//     let c=b+data1
//     callback(null,c)
//   }
// ],callback)



const callback=(err,data)=>{
    if(err)
    {
        console.log(err)
    }
    else{
        console.log(data)
    }
}



// async.waterfall([
//     function add(callback){
//         let a=20
//         callback(null,a)
//     },
//     function addition(data1,callback){
//         let b = 20 +data1
//         callback(null,b)
//     }
// ],callback)




// async.parallel([
//     function FirstPause(callback){
//         setTimeout(()=>{
//             callback(null,"Hiii")
//         },2000)
//     },
//     function SecondPause(callback){
//         setTimeout(()=>{
//             callback(null,"Vedant")
//         },4000)
//     },
//     function ThirdPause(callback){
//         setTimeout(()=>{
//             callback(null,"How are you?")
//         },6000)
//     },

// ],callback)



