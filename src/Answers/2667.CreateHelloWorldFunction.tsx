// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

function createHelloWorld() {
  return function (...args: any): string {
    return "Hello World";
  };
}

console.log(createHelloWorld());
