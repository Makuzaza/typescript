function Enumerable(value: boolean) {
      return function (
        target: any,
        propertyKey: string,    
        descriptor: PropertyDescriptor  
        ) {
            descriptor.enumerable = value;  
        };
    }
    
class Greeter {
      greeting: string;  
      constructor(message: string) {
            this.greeting = message;  
        }  

@Enumerable(true) greet() {
        return 'Hello, ' + this.greeting;  
    }
} 

// Instantiate Greeter

const greeter = new Greeter('world'); // Console output

console.log(greeter.greet()); // Outputs: "Hello, world"

// Check if the greet method is enumerable

for (const propName in greeter) {
      console.log(propName);
} 