function sayHello(){
    return "hello world";
}

let fn = sayHello;

fn();

// currying

function add(a){
    return function(b){
        return a + b;
    }
}

const add2 = a => b => a + b;

console.log(add2(5)(2))
// --------------------------------------- Adding arrays
const numbers = [1, 2,3];

// adding 
const index = numbers.indexOf(2);
const added = [...numbers.slice(0, index),
                4,
              ... numbers.slice(index)
            ]

// --------------- Remove

const removed = numbers.filter(n => n !== 2);