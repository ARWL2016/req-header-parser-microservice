const express = require('express'); 

var app = express(); 
var parse = require('./parse-header/parse-header');

var port = process.env.PORT || 3003; 

app.get('/', (req, res) => {

    var ip = (req.ip).replace(/:+|[a-z]+/g, "");

    var userAgent = req.get('user-agent');
    var acceptLanguage = req.get('accept-language');

    var os = parse.parseUserAgent(userAgent);
    var lang = parse.parseAcceptLanguage(acceptLanguage); 

    var responseObject = {
        ip: ip, 
        lang: lang, 
        os: os
    };

    console.log(req.ip);

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(responseObject, undefined, 2));
    res.end('Thanks'); 
});

app.listen(port, ()=> {
    console.log('Listening on port ' + port); 
});