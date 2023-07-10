// Week 1 - Functions

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Define a function called logGreeting() that prints the string “Hello!” (use console.log).
// Underneath the function, write the line of code that runs the function.

function logGreeting() {
  console.log("Hello!");
}
logGreeting();

// Exercise 2. Define a function called getName() that *returns* a string that is your name.
// Remember, this function should return the string -- not print it.
// Then print your name in the console by passing getName() into the console.log() function.

function getName() {
  return "Natalia";
};
console.log(getName());

// Exercise 3. Call a function within a function -- Write a function called logGreeting2()
// that prints a full sentence that contains your name: "Hello! My name is <name>."
// logGreeting2 should call myName() to get your name.
// Then print your greeting to the console by calling logGreeting2().
function logGreeting2() {
  return `Hello my name is ${getName()}.`;
}
console.log(logGreeting2());

// Exercise 4. Write a function that takes 3 parameters that are all numbers.
// The function should return the sum of the 3 numbers.
// Then write some function calls you would use to test your function.

function sum(num1, num2, num3) {
  let result = num1 + num2 + num3;
  return result;
}

console.log(sum(3, 7, 2));
console.log(sum(41, 12, 6));

// Exercise 5. Let's say a museum gives a discount for children ages 14 or under, and seniors 65 or older.
// Write a function that takes in a person's age and returns true if they should get a discount.
// Otherwise it should return false.
// Then write some function calls you would use to test your function.

function discount(age) {
  if (age <= 14 || age >= 65) {
    return true;
  } else {
    return false;
  }
};
console.log(discount(12));
console.log(discount(78));
console.log(discount(22));

// Exercise 6. Write a function that takes 2 parameters -- one number and one string.
// The function should print the string the given number of times.
// Then write some function calls you would use to test your function.

function repeat(num1, str) {
  let result = "";
  for (let i = 0; i < num1; i++) {
    result += `${str} `;
  };
  return result;
};

console.log(repeat(3, "MEOW"));
console.log(repeat(5, "BORK"));
console.log(repeat(1, "Hullo"));

// Exercise 7. Read the following code (don't run it yet)
function mysteryFunction1(p1) {
  return p1 * 2;
}
const y = 4;
const z = mysteryFunction1(y);
console.log("The value of y is " + y);
console.log("The value of z is " + z);

// Without running the code, write down in a comment:
// 1. What mysteryFunction1 does: it multiplies p1 by 2.
// 2. What prints out for the value of y: 4
// 3. What prints out for the value of z: 8
// Now run the code and see if you're correct.
// Were you correct? If not, what did you learn?: I was correct.

// Exercise 8. Read the following code (don't run it yet)
function mysteryFunction2(p1, p2) {
  const x = p1 - p2;
  return x;
}
const a = mysteryFunction2(10, 4);
const b = mysteryFunction2(a, 1);
console.log("The value of a is " + a);
console.log("The value of b is " + b);

// Without running the code, write down in a comment:
// 1. What mysteryFunction2 does: it subtracts p2 from p1.
// 2. What prints out for the value of a: 6
// 3. What prints out for the value of b: 5
// Now run the code and see if you're correct.
// Were you correct? If not, what did you learn?: I was correct.

// Exercise 9. This exercise is to practice reading the documentation for functions.
// String.split() is a function in the JavaScript standard library that you can use in your code.
// Read about the split() function here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// Try to use it to solve the following challenges:

// Here's a string I made representing my grocery list.
// Using split() and groceryList, make an array of my grocery list items

const groceryList = "eggs,carrots,orange juice";
let groceries = groceryList.split(",");
console.log(groceries)

// Here's a string I made representing my morning schedule.
// Using split() and mySchedule, make an array of the *first 2* things I do in the morning
// There are multiple ways to do this, but try doing it using only the split() function.

const mySchedule = "wake up--->brush teeth--->eat breakfast--->go to work";
let routine = mySchedule.split("--->");
routine = [routine[0], routine[1]]
console.log(routine);
// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
// This one was pretty easy and the only source I used was the link given in an earlier line.

// Email your file to the course staff,
// or commit your file to GitHub and email us a link.
