// let i = 0;
// while( i < 10) {
//     console.log(`I value: ${i}`);
//     i++;
// }

//for loops

// for (let i = 10; i > 0; i--){
//     console.log(`I value: ${i}`);
// }

// const array = [ 'a' , 'b' , 1, 2, 3, 5];
// for (let i = 0; i < array.length; i++){
//     console.log (`index: ${i} ${array[i]}`);
// }

// const cars = ['SUV', 'Subcompact' , 'Economy', 'Performance' , 'Pickup'];

// for (let type of cars){
//     console.log(`${type}`);
// }

// const car = {
//     wheels: 4,
//     doors: 2,
//     seats: 5,
// };
// for (let part in car){
//     console.log("My car has " + car[part] + " " + part);
// }

for ( let i = 1; i < 101 ; i++)
    if  (i % 15 === 0){
        console.log("FizzBuzz");
    }else if ( i % 5 === 0){
        console.log("Buzz");
    } else if  ( i % 3 === 0){
        console.log("Fizz");
    }else console.log(i);

let i = 1
while (i<101){
    if  (i % 15 === 0){
        console.log(`FizzBuzz ${i}`);
    }else if ( i % 5 === 0){
        console.log(`Buzz ${i}`);
    } else if  ( i % 3 === 0){
        console.log(`Fizz ${i}`);
    }else console.log(i);
    i++;
}

    