function add(a, b){
    return (a+b);
}
function sub(a, b){
    return (a-b);
}
function mul(a, b){
    return (a*b);
}
function div(a, b){
    return (a/b);
}

//module.exports = add; we can only exports one function 

// when we have to exports multiple function then we export it as a object
module.exports = {
    addFn: add,  // we hasve rename the add function
    sub,
    mulFn: mul,   //rename
    div,
}

//we can also export using exports object
exports.mod = (a, b)=>{
    return (a%b);
}