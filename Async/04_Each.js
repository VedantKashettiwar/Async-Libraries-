const async = require("async");
const fs = require("fs")

// dir1 is a directory that contains file1.txt, file2.txt
// dir2 is a directory that contains file3.txt, file4.txt
// dir3 is a directory that contains file5.txt
// dir4 does not exist

// const fileList = ['Async/dir1/file1.txt','Async/dir2/file3.txt','Async/dir3/file5.txt'];
// const withMissingFileList = ['Async/dir1/file1.txt', 'Async/dir1/file2.txt'];

// // asynchronous function that deletes a file
// const deleteFile = function(file, callback) {
//     fs.unlink(file, callback);
// };

// // Using callbacks
// async.each(withMissingFileList, deleteFile, function(err) {
//     if( err ) {
//         console.log(err);
//     } else {
//         console.log('All files have been deleted successfully');
//     }
// });

// const fileList = ['Async/dir1/file1.txt','Async/dir2/file3.txt','Async/dir3/file5.txt'];

// const Delete =(file,callback)=>{
//     fs.unlink(file,callback)
// }
// async.each(fileList,Delete,(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("Deleted")
//     }
// })


// const fileList = ['Async/dir1/file1.txt','Async/dir2/file3.txt','Async/dir3/file5.txt'];
// const numList = [1,2,3,4,5,6,7,8,9];
// const numList2 = []

// const Delete =(numList,callback)=>{
//     fs.unlink(file,callback)
// }
// async.each(fileList,Delete,(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("Deleted")
//     }
// })





// const numList = [1,2,3,4,5,6,7,8,9];
// const numList2 = []
// function add(num){
//     return num+2
// }
// const calc = (num,callback)=>{
//     return callback(num)
// }

// const loop =()=>{
//     for(i of numList){
//         numList2.push(calc(i,add))
//     }
// }

// async.each(numList,loop,(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("Deleted")
//     }
// })
// console.log(numList2)


