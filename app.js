const express = require('express'); 

var app = express(); 
var parse = require('./parse-header/parse-header');

var port = process.env.PORT || 3000; 

app.get('/', (req, res) => {

    var ip = (req.ip).replace(/:+|[a-z]+/g, ""),

    userAgent = req.get('user-agent'),
    acceptLanguage = req.get('accept-language'),

    os = parse.parseUserAgent(userAgent),
    lang = parse.parseAcceptLanguage(acceptLanguage),

    responseObject = {
        ip: ip, 
        lang: lang, 
        os: os
    }

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(responseObject, undefined, 2));
    res.end('Thanks'); 
});

app.listen(port, ()=> {
    console.log('Listening on port ' + port); 
});