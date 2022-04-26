const g = require('./modules/greeting.js');
const { getUsers } = require('./modules/users.js')

const name = 'Mike Taylor';

// console.log(g);

// g.greeting('Ilan');
// g.sayHello('Ilan');

console.log(getUsers());

getUsers()
.then(res => {
  console.log(res.data);
})
.catch(err => {
  console.log(err.message);
})


