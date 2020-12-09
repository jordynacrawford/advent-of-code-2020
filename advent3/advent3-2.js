let input = require('./input3.js');

//Slope 1:
let treeCount = 0;
let i = 0;

for(let r = 1; r < input.length; r++) {
    
    let currentRow = input[r];
    
    if((currentRow.length-i)>1) {
        i=i+1;
    }else{
        i=(i-currentRow.length)+1;
    }
    
    if(currentRow[i]==="#") {
        treeCount++;
    }
}

let slope1 = treeCount

//Slope 2: DONE
treeCount = 0;
i = 0;

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

let slope2 = treeCount

//Slope 3:
treeCount = 0;
i = 0;

for(let r = 1; r < input.length; r++) {
    
    let currentRow = input[r];
    
    if((currentRow.length-i)>5) {
        i=i+5;
    }else{
        i=(i-currentRow.length)+5;
    }
    
    if(currentRow[i]==="#") {
        treeCount++;
    }
}

let slope3 = treeCount

//Slope 4:
treeCount = 0;
i = 0;

for(let r = 1; r < input.length; r++) {
    
    let currentRow = input[r];
    
    if((currentRow.length-i)>7) {
        i=i+7;
    }else{
        i=(i-currentRow.length)+7;
    }
    
    if(currentRow[i]==="#") {
        treeCount++;
    }
}

let slope4 = treeCount

//Slope 5:
treeCount = 0;
i = 0;

for(let r = 2; r < input.length; r=r+2) {
    
    let currentRow = input[r];
    
    if((currentRow.length-i)>1) {
        i=i+1;
    }else{
        i=(i-currentRow.length)+1;
    }
    
    if(currentRow[i]==="#") {
        treeCount++;
    }
}

let slope5 = treeCount

console.log(`Slope 1: ${slope1}`);
console.log(`Slope 2: ${slope2}`);
console.log(`Slope 3: ${slope3}`);
console.log(`Slope 4: ${slope4}`);
console.log(`Slope 5: ${slope5}`);

console.log(slope1*slope2*slope3*slope4*slope5);