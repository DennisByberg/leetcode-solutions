// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

function CreateHelloWorldFunction() {
  return function (): string {
    return "Hello World";
  };
}

console.log(CreateHelloWorldFunction());
