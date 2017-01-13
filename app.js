const express = require('express'); 

var app = express(); 

var port = process.env.PORT || 3000; 

app.get('/', (req, res) => {
    console.log(req.headers, typeof req.headers); 
    console.log('-------------------');
    console.log(req.headers['accept-language'], typeof req.headers['accept-language']); 
    console.log(req.headers['user-agent'], typeof req.headers['user-agent']); 
    console.log(req.ip, typeof req.ip);
    console.log(req.ips, typeof req.ips);
console.log('-------------------');
    var userAgent = req.get('User-agent');
    console.log(userAgent)

    console.log(JSON.stringify(req.headers, undefined, 2));
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(req.headers, undefined, 2));
    // console.log(req.message.headers);
    res.end('Thanks'); 
});

app.listen(port, ()=> {
    console.log('Listening on port ' + port); 
});