const async = require("async");
const fs = require("fs")

// dir1 is a directory that contains file1.txt, file2.txt
// dir2 is a directory that contains file3.txt, file4.txt
// dir3 is a directory that contains file5.txt
// dir4 does not exist

const fileList = ['Async/dir1/file1.txt','Async/dir2/file3.txt','Async/dir3/file5.txt'];
const withMissingFileList = ['file1.txt','file2.txt','file4.txt'];

// asynchronous function that checks if a file exists
function fileExists(file, callback) {
   fs.access(file, fs.constants.F_OK, (err) => {
       callback(null, !err);
   });
}

// Using callbacks
async.every(fileList, fileExists, function(err, result) {
    console.log(result);
    // true
    // result is true since every file exists
});

// async.every(withMissingFileList, fileExists, function(err, result) {
//     console.log(result);
//     // false
//     // result is false since NOT every file exists
// });


