let input = require('./input4.js');
let isValid = require('./isValid');

//split each passport into a string
//split strings into array of keys and values (not distinguished, not important)
//if passport contains 8 keys (sixteen strings), it's valid
//if it contains 7 keys (14 strings) AND one of them is NOT cid, it's valid

let validPassportCount = 0;

for(let i = 0; i < input.length; i++) {
    let strArr = input[i].replace(/\n/g, " ").replace(/ /g, ":").split(":");
    if(isValid(strArr)) {
        validPassportCount++;
    }
}

console.log(validPassportCount);