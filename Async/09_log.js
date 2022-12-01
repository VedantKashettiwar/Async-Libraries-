const async = require("async");

// in a module
var hello = function(name, callback) {
    setTimeout(function() {
        callback(null, 'hello ' + name);
    }, 1000);
};

// in the node repl
node> async.log(hello, 'world');
'hello world'