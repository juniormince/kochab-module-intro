const numberModule = require('./number-module');

console.log(numberModule);

const numberArray = require('./number-array');

const addinator = require('./addinator');

console.log(addinator(numberArray));

//create a killer whale (scary) creature
//log that creature
const Creature = require('./creature') //a class

const orca = new Creature('killer whale', 'scary');

console.log(orca);

const multipleThings = require('./multiple-things'); //an object

console.log(multipleThings);