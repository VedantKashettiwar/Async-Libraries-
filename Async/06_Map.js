const async = require("async");
const fs = require("fs");

// file1.txt is a file that is 1000 bytes in size
// file2.txt is a file that is 2000 bytes in size
// file3.txt is a file that is 3000 bytes in size
// file4.txt does not exist

const fileList = ['Async/dir1/file1.txt','Async/dir2/file3.txt','Async/dir3/file5.txt'];
const withMissingFileList = ['file1.txt','file2.txt','file4.txt'];

// asynchronous function that returns the file size in bytes
function getFileSizeInBytes(file, callback) {
    fs.stat(file, function(err, stat) {
        if (err) {
            return callback(err);
        }
        callback(null, stat.size);
    });
}

// Using callbacks
async.map(fileList, getFileSizeInBytes, function(err, results) {
    if (err) {
        console.log(err);
    } else {
        console.log(results);
        // results is now an array of the file size in bytes for each file, e.g.
        // [ 1000, 2000, 3000]
    }
});