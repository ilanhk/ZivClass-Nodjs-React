//fs - file system
//fs has many methods both async and sync(regular)
//to see all methods in  the terminal type "node" then type "fs"
// all methods with sync in it are sync functions the rest are aysnc
//fs methods can be very useful to create loggers(for client server errors) and ...
const fs = require('fs');

//copy
fs.copyFile('./text', './text3', err=>{
  if(err){
    console.log(err);
  }
})


//delete
// fs.unlink('./text2', err => {
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log('deleted');
//   }
// })

//write to a file
// let arr = [1,2,3,4,5];
//
// fs.writeFile('./text2', JSON.stringify(arr), err => {
//   if(err){
//     console.log(err);
//   }
// })


// append to a file
// let txt = '125655 5 5786 7687 676 7676 ';
// let obj = {
//   name:'ilan',
//   email:'ilan@gmail.com'
// }
// fs.appendFile('./text', JSON.stringify(obj), err=>{  //to append an object to a file it must be a string
//   if(err){
//     console.log(err);
//   }
// })


// read

// fs.readFile('./text',(err,data)=>{  //readfile is the async function
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log(data.toString());
//   }
// })

// console.log(1);
// const f = fs.readFileSync('./text'); //readFileSync is not async
// console.log(f.toString());
// console.log(2);