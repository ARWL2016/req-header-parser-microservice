###Request Header Parser Microservice

https://serene-anchorage-56334.herokuapp.com/ 

####Project spec: 
**Objective**: Build a full stack JavaScript app that is functionally similar to this: https://cryptic-ridge-9197.herokuapp.com/api/whoami/ and deploy it to Heroku.  
**User Story**: I can get the IP address, language and operating system for my browser.

####Notes: 
1. Written in Node and Express 4.14.0. Deployed on Heroku.
2. This app parses the request object using native Express methods.
3. Utility functions for parsing the req are contained in a separate module *parse-header.js* 