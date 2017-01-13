var userAgent = 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36';

var os = userAgent.split(' ').slice(1,4).join(' ');
console.log(os, typeof os); 