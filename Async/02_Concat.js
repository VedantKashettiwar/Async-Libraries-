const async = require("async");
const fs = require("fs")


// dir1 is a directory that contains file1.txt, file2.txt
// dir2 is a directory that contains file3.txt, file4.txt
// dir3 is a directory that contains file5.txt
// dir4 does not exist

// const fileList = ['Async/dir1','Async/dir2','Async/dir3'];
// let withMissingDirectoryList = ['dir1','dir2','dir3', 'dir4'];

// // Using callbacks
// async.concat(fileList, fs.readdir, function(err, results) {
//    if (err) {
//        console.log(err);
//    } else {
//        console.log(results);
//        // [ 'file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', file5.txt ]
//    }
// });











// const Alphalist = ["a","b","c","d","e","f","g"]
// const ExistingAlphaList = ["a","b","c","d"]




// hello =(Alphalist, (err) => {
//     if (err)
//       console.log(err);
//     else {
//       for(i of Alphalist){
//         if(ExistingAlphaList.includes(i)){
//             return i
//         }
//       }
//     }
//   })
//   console.log(hello())
// const hello = (item)=>{
//     return item
// }
// async.concat([1,2,3,4],hello,(err, result) => {
//     if (err){
//         console.log(err)
//     }
//     else{
//     console.log(result)
//     } 
// });
