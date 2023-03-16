// ------------------Var, Let and Const----------

/*
    Var is function scoped, Let and Const are block scoped
*/

/*
{
    var a = 10;
}
console.log(a);    //OP - 10
*/

/*
{
    let a = 10;
}
console.log(a);   //OP - Reference Error 'a' is not defined
*/








// Understanding the THIS keyword - THIS refers to the object that is executing the current function. If a function id part of an
// object we call it a Method. 

// method -> THIS = Object
// function -> THIS = global (window, global)

/*
const video = {
    title: 'a',
    play(){
        console.log(this);
    }
};

video.play() //OP { title: 'a', play: [Function: play] }

video.stop = function (){
    console.log(this);
}

video.stop()    //OP { title: 'a', play: [Function: play], stop: [Function (anonymous)] }

*/

// This with the constructor function

/*

function Video (title){
    this.title = title      // This here points to the empty object created in line number 57 because of the NEW keyword
    console.log(this);
}
const x = new Video('a')    // Here because of the NEW keyword an empty object is created {}
// OP   Video { title: 'a' }

*/



// Use of THIS keyword for a callback function

/* 
const video = {
    title: 'a',
    tags: ['a','b','c'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this.title, tag);
        })
    }
}

video.showTags()       // OP    undefined a, undefined b, undefinde c 

*/

// To attach the THIS of the Video object with the callback function inside forEach, we need to pass the this as the second argument for 'forEach'

/*
const video = {
    title: 'a',
    tags: ['a','b','c'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this.title, tag);
        }, this)
    }
}

video.showTags()    // OP a a, a b, a c

*/






// -----------------------Closures----------------

/*
 Def --  FUNCTION ALONG WITH THE REFERENCE OF IT'S OUTER ENVIRONMENT FORMS CLOSURE. FUNCTION ALONG WITH IT'S LEXICAL SCOPE BUNDLED TOGETHER.
 In Javascript, when we return a function from another function, we are effectively returning a combination of the function along with it's function scope. This would let the function definition have an associated persistent memory which could hold on to live data between executions. The combination of the function and its scope chain is what is called as a closure in Javascript.
 */

 // Here there is a fresh memory creation for each 'outer' function call
/*
function outer(){
    counter = 0;
    function inner(){
        counter++;
        console.log(counter)
    }
    inner()
}
outer();    // OP - 1
outer();    // OP - 1
*/

// Here we can see the memory is persistent for 'fn' function call
/*
function outer(){
    counter = 0;
    function inner(){
        counter++;
        console.log(counter)
    }
    return inner;
}
fn = outer();    
fn()    // OP - 1
fn()    // OP - 2
*/

// When we invoke function 'z', with definition of function 'y' it also remembers the reference of variable 'a' not the value of variable 'a'
/*
function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    a = 100;
    return y;
}
z = x()
z()  // OP - 100
*/

// Remembering how many times a function has been called with the help of closures
/*
function outer(){
    let a = 0;
    return function inner(){
        console.log(++a);
    }
}
x = outer();
x()
x()
x()
x()
x()     //OP - 5
*/

/*
function outest(){
    let a = 10;
    return function outer(){
        let b = 20;
        return function innner(c){
            console.log(a,b,c);
        }
    }
}

x = outest()()
x('string') // OP - 10 20 string
*/


// Data Hiding with the help of Closures, by making the incrementCounter function form a closure with variable count, thus the count variable in a way becomes private, with that if we invoke the Y FUNCTION Separately than a new execution context will be formed thus the value of counter will start form 0 again.

/*
function counter(){
    var count = 0;
    return function incrementCounter(){
        count++;
        console.log(count)
    }
}
x = counter()
x()     //OP - 1
x()     // OP - 2

y= counter()
y()     //OP - 1
y()     // OP - 2

*/


// Data Hiding with the help of a Constructor Function having increment and decrement Counter

/*
function counter(){
    var count = 0;
    this.increment = function (){
        count++;
        console.log(count);
    }
    this.decrement = function (){
        count--;
        console.log(count);
    }
}

x = new counter()
x.increment() // OP 1
x.decrement() // OP 0

*/








// ----------------------Currying--------------------

