// Homework Exercises

// 1. For each of these values, what type will the TypeScript compiler infer?
let a = 118;
// A: number

let b = 'Thieves';
// A:string

let c = [true, false, false];
// A: boolean[]

let d = {age: number};
// A: any in this case, number if following this "dictionary" with } = {age:25}

let e = [3]
// A: number[]

let f;
// A: any

let g = []
// A: any[]



// 2. What are the compilation errors in each of the following code snippets?
let song: {
  title: string,
    releaseYear: number,
} = {
    title: 'Lose Yourself'
};

// A:  the releaseYear variable is missing. 

let prices = [100, 200, 300];
prices[0] = '$100';
A: string is not assignable to type 'number'

function myFunc(a: number, b: number): number {}

A: A function whose declared type is neither 'undefined','void', or 'any' must return a value-
a is declared but its value is never read, b is declared but its value is never read.


//codewars: 

// #1     incorrect division method:
//This method, which is supposed to return the result of dividing its first argument by its second, isn't always returning correct values. Fix it.
/*
const solve = (x, y) => x //  y

 changes to -

const solve = (x, y) => x / y
*/


// #2    Find the missing letter:
/*
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
(Use the English alphabet with 26 letters!)

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!
*/
function findMissingLetter(array) {
    for (let i = 0; i < array.length - 1; ++i) {
      const currentLetter = array[i].charCodeAt(0);
      // currentLetter gets the current letter, and convert it to its character code (a digit)
      // nextLetter gets the next letter in the array and converts it to its character code (a digit)
      
      //charCodeAt(0) will convert the current letter indexed to into a the digit for comparison.
      const nextLetter = array[i + 1].charCodeAt(0);
  
      // nextCharCode - currentCharCode should = 1 since each letter is +1 from the previous letter.
      if (nextLetter - currentLetter != 1) {
        //fromCharCode converts the number back into a letter.
        return String.fromCharCode(currentLetter + 1);
      }
    }
  
  }

// #3 (since #1 was unfairly easy.) Is n divisible by(...)?
/*
Create a function that checks if the first argument n is divisible by all other arguments (return true if no other arguments)

Example:

(6,1,3)--> true because 6 is divisible by 1 and 3
(12,2)--> true because 12 is divisible by 2
(100,5,4,10,25,20)--> true
(12,7)--> false because 12 is not divisible by 7
*/

//...args will take in an unspecified number of arguments.
function isDivisible(...args){
    // start at i = 1 because you dont need to be checking if the first digit divides into itself.
    // while i is less than the length of the number of arguments.
    // increase i by 1
    for (let i = 1; i < args.length; i++) {
        if (args[0] % args[i] !== 0) {
          return false;
        } 
      }
    return true;
        
  
}