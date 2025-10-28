let add= (a:number, b:number)=>a+b;

console.log(add(10,20));

let greet=(name:String):String=> `Hello, ${name}!`
console.log(greet("Alice"));

// Named Function Example
function multiply(a:number, b:number):number
{
    return a*b;
}

console.log('Named function example: '+multiply(5,6));

// Anonymous Function Example
let addition= function(a:number, b:number, c?:number):number
{
    return a+b+c;
}
console.log('Anonymous function example: '+addition(15,25));

// Arrow Function Example
let subtraction=(a:number, b:number)=> (a-b);
let stringConcatenation = (a: string, b: string='Arjun'): string=> a.concat(b);
let many = (...args: any[]): string => args.join(' ');


console.log('Arrow function example: '+subtraction(30,10));
console.log('Arrow function example: '+stringConcatenation("Hello, ","World!"));
console.log('Arrow function example: '+stringConcatenation("Hello, "));
