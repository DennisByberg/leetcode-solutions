// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

// My solution...
function createHelloWorld() {
  return function (...args: any): string {
    return "Hello World";
  };
}

// Check if its working...
console.log(createHelloWorld());
