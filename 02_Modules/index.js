const math = require('./math');

/*
const{addFn, sub} = require('./math'); here we have destructure the function
console.log(sub(5, 3));   here we dont have to write (math.function_name)
*/

console.log(math.addFn(5, 11));  // here we hasve to write (math.function_name)
console.log(math.sub(5, 11));
console.log(math.mulFn(5, 11));
console.log(math.div(55, 11));