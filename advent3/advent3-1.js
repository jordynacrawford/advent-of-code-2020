let input = require('./input3.js');

//split input into array of strings
//navigate using bracket notation
//3 to the right is i+3
//down one is jump to next string, stay at current value of i
//if i exceeds the length of the string, start back at 0
//at each new string, check if value is "." or "#"
//add to an accumulator variable for each "#"
//return accumulator

let treeCount = 0;
let i = 0;

for(let r = 1; r < input.length; r++) {
    
    let currentRow = input[r];
    
    if((currentRow.length-i)>3) {
        i=i+3;
    }else{
        i=(i-currentRow.length)+3;
    }
    
    if(currentRow[i]==="#") {
        treeCount++;
    }
}

console.log(treeCount);

