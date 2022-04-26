const axios = require('axios');

const getUsers = async()=>{
    try{
        const data = await axios.get('https://sonplaceholder.typicode.com/users');
        return data; 
    } 
    catch (error){
        throw error;
    };
};
//every async function is returning a promise and must be handled with .then and .catch

const test = async ()=>{
    return 'Ilan';
};
//still returns promise doesnt need await beucase its immediate
//use await when fetching data, or runing a large calculation ...
//use async functions to run in the background to allow other codes to run
//async functions would immediately put code in the event loop (runs code in the background)



module.exports = {
    getUsers
};

