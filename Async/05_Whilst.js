const async = require("async");
const fs = require("fs")


// var count = 0;
// async.whilst(
//     function test(cb) { cb(null, count < 5); },
//     function iter(callback) {
//         count++;
//         setTimeout(function() {
//             callback(null, count);
//         }, 1000);
//     },
//     function (err, n) {
//         // 5 seconds have passed, n = 5
//         console.log(n)
//     }
// );s

// var count = 0
// async.whilst(function test(cb){cb(null,count<5)},function iter(callback){
//     count++;
//     setTimeout(function(){
//         callback(null,count)
//     },1000)
// },function(err,n){console.log(n)})

const fileList = ['Async/dir1/file1.txt','Async/dir2/file3.txt','Async/dir3/file5.txt'];

function getFileSizeInBytes(memo, file, callback) {
    fs.stat(file, function(err, stat) {
        if (err) {
            return callback(err);
        }
        callback(null, memo + stat.size);
    });
}

// Using callbacks
async.reduce(fileList, 0, getFileSizeInBytes, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
        // 6000
        // which is the sum of the file sizes of the three files
    }
});

