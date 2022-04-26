const express = require('express');
const logger = require('./middlewares/logger.js');
const app = express(); // can call it anything i want not just app
const product_routes = require('./routes/products.js');
const countries_routes = require('./routes/countries.js')
const dotenv = require('dotenv');
// require('dotenv').config(); // this also works the same

dotenv.config();
// console.log(products())

//Body parsers need them for post request to access body
//if express is outdated bellow 4.16 version npm install body-parser
//if have the most updated express version write code bellow to access req.body in post request without those 2 lines of code the object will be empty
app.use(express.urlencoded({extended:true}));
app.use(express.json()); 

app.listen(process.env.PORT || 5000, ()=>{
    console.log(`listen to port ${process.env.PORT || 5000}`)
});

app.use('/api/products', product_routes); // the route '/api/products' will be used in all product routes and will make all those routes operational.
app.use('/api/countries', countries_routes);

// //to call middleware:
// //you can call multiple middleware at the same time like this app.use([logger, somethingelse]); but better to call each one by themselves
app.use(logger); //this is for all routes


// //CRUD
// //Create - POST request
// //Read All - GET request
// //Read - Get request with params
// // Update - PUT request
// // Delete - DELETE request
// //CRUD is the most common http request but there are more in terminal type "node" then type "http" to see all http requests and status codes
// // GET with params, PUT, DELETE uses the same route this is called RESTFUL API 


// // res.status(200) ok
// // 201 Created
// // 204 No content
// // 400 Bad request
// // 401 Unauthorized
// // 403 Forbidden

// app.get('/about', auth, (req, res)=>{
//     res.send('Welcome Admin!');
// });

