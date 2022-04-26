//middleware is something between the request and the response and its a function.
//every time we use app.use(express.middleware()) we can call a middleware function that is built in or we created.

// //ex middleware:
const fs = require('fs');
const logger = (req, res, next) =>{
  // console.log('url', req.url);
  // console.log('params',req.params);
  // console.log('query',req.query);
  // console.log('body', req.body);

  let url = req.url;
  let params = req.params;
  let query = req.query;
  let body = req.body;
  let headers = req.headers
  let obj = {
    headers
  }
  console.log(headers);
  fs.appendFile('./log', JSON.stringify(obj),err=>{
    if(err) console.log(err);
  });
//this will create a logger file which can be useful to understand client side errors. 

  next(); // next is a sign to give back control to the function that called this middleware
}

module.exports = logger;
