/**
 * Throttling - Throttling is used to call a function after every millisecond or 
 * a particular interval of time only the first click is executed immediately.
 * 
 */

const throttleFunction=(func, delay)=>{

  // Previously called time of the function
  let prev = 0;
  return (...args) => {
    // Current called time of the function
    let now = new Date().getTime();

    // Logging the difference between previously
    // called and current called timings
    console.log(now-prev, delay);
     
    // If difference is greater than delay call
    // the function again.
    if(now - prev> delay){
      prev = now;

      // "..." is the spread operator here
      // returning the function with the
      // array of arguments
      func.call(this,...args); 
    }
  }
}

const btn=document.querySelector("#throttle");

btn.addEventListener("click", throttleFunction(()=>{
  console.log("button is clicked");

  // hit backend api
}, 1500));


/**
 * Advantages of throttling function: 

It prevent frequent calling of the function.
It makes the website faster and controls the rate at which a particular function is called.

 */