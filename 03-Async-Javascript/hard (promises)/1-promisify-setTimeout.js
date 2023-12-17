/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Waited for " + n + " seconds");
      resolve();
    }, n * 1000);
  });
}

// Example usage: Wait for 2000 milliseconds (2 seconds)
console.log("Start");
wait(2).then(() => {
  console.log("promise resolved");
});
