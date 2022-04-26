

const greeting = (name)=>{
    console.log(`Hello ${name}, welcome to NodeJs`);
};

const sayHello = (name)=>{
    console.log(`Hello ${name}`);
};

// module.exports = greeting; //for single thing to export

// module.exports.sayHello = sayHello;
// module.exports.greeting = greeting;

module.exports  = {
    greeting,
    sayHello
};