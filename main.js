// -----------------------Closures----------------

/*
 Def -- In Javascript, when we return a function from another function, we are effectively returning a combination of the function along with it's function scope. This would let the function definition have an associated persistent memory which could hold on to live data between executions. The combination of the function and its scope chain is what is called as a closure in Javascript.
 */

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
