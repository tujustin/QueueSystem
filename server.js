const express = require('express');
const path = require('path');
const app = express();

var http = require("http");

app.use(express.static(__dirname + '/dist/sample-app'));

app.get('/*', function(req,res) {
    
    res.sendFile(path.join(__dirname+'/dist/sample-app/index.html'));
});


// app.all('*', (req, res, next) => {
//     res.sendFile(path.resolve('/dist/sample-app/index.html'));
// });

app.listen(8000);

setInterval(function() {
    // var d = new Date();
    // var n = parseInt(d.getUTCHours());
    // if (n <= 4 || n >= 11) {
        http.get("http://katweb123.herokuapp.com");
    // }
}, 1200000); // every 10 min