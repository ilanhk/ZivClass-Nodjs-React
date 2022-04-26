// this is from knex docs: http://knexjs.org/
//knex allows me to use postgres or other sql databases
//all knex functions returns a promise need to use .then() and .catch() to deal with them
const db = require('knex')({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      port : 5432,
      user : 'postgres',
      password : 'Ilanhk00',
      database : 'postgres'
    }
  });

  db('country')
//   .insert(
//     [
//         {country: 'Ilan2'}
//     ]
// )
// .update({country:'Ilan5555555'})
.del() //delete
.returning('*') //.returning is returing statement for postgresql
//   .select('country_id', 'country')
  .where({country:'Ilan2'}) // for update() and del() they need where() or it will affect the whole table
  .then((data)=>{
      console.log(data);
  })
  .catch((error)=>{
      console.log(error);
  })