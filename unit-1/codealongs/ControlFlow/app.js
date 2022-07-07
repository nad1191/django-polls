console.log('control flow');

let x= 5; //assignment operator
console.log(x)

//truthy vs falsey values

//truthy values
1
true
"hello"
10
"0"
" "

//falsey values
0
false
null
NaN
undefined
""

//exercises
console.log(false && 0); //false

console.log('hello' || undefined && "0") //hello

console.log("0" || null && "hello"); //"0"

console.log(null || undefined || "hello"); // "hello"

console.log(" " && "engineer" || 0 && false); // "engineer"

console.log ("engineer" && 0); // 0 false because of value

console.log("engineer" && undefined); //

let newTax = 0;
let salesTax = newTax || 7;
console.log(salesTax);