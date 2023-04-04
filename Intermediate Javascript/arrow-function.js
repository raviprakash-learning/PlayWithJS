/**
 * Arrow functions were introduced in ES6.
 * 1. Arrow functions allow us to write shorter function syntax:
 */

// normal function 
function doSum(a,b) {
    return a + b;
}

// arrow function is shorthand of above
const doSum = (a, b) => a + b;

const do10X = a => a * 10;


/**
 * 2. Arrow functions do NOT define their own this 
 *  
 * In short, with arrow functions there are no binding of this.
 * 
 * In regular functions the this keyword represented the object that called the function, 
 * which could be the window, the document, a button or whatever.
 * 
 * With arrow functions the this keyword always represents the object that 
 * defined the arrow function.
 */

// Function 1
var obj = {
    msg: "Need Subscribers",
    printMessage: function(){
        console.log(this.msg);   
    }
}

// test
obj.printMessage();

var msg = "I need Subscribers. Do share my video with others"

