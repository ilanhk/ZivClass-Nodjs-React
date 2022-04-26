require('dotenv').config();

const db = require('knex')({
  client: 'pg',
  connection: {
    host : process.env.DB_HOST,
    port : process.env.DB_PORT,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_DATABASE,
  }
});

const getAllCountries= () => {
  return db('country')
    .select('country_id','country')
    .orderBy('country')
};

const selectCountry = (id)=>{
    return db('country')
    .select('country_id','country')
    .where({country_id: id})
};

module.exports = {
  getAllCountries,
  selectCountry
};