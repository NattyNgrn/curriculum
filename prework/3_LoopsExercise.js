// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let n = 5;
let i = 1;
while (i <= n) {
  console.log(i);
  i++;
  }


// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let result = "";
let m = 5
i = 0;
do {
  i++;
  result += `${i} `;
} while (i < m);
  console.log(result);


  // Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let yes = "";
n = 5;
for (i = 1; i <= n; i++) {
  yes += i;
}
console.log(yes);

// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.
let num = 10;
for (i = num; i >= 1; i--) {
  console.log(i);
};

j = num;
while (j >= 1) {
  console.log(j);
  j--;
};

j = num;
do {
  console.log(j)
  j--;
} while(j >= 1);


// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

let num27 = 27;
for (i = 7; i <= num27; i++) {
  console.log(i);
};

j = 7;
while (j <= num27) {
  console.log(j);
  j++;
};

m = 7;
do {
  console.log(m);
  m++
} while (m <= num27);

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
let num100 = 100;
for (i = 0; i <= 100; i += 10) {
  console.log(i);
};

j = 0;
while (j <= num100) {
  console.log(j);
  j += 10;
};

m = 0;
do {
  console.log(m);
  m += 10;
} while(m <= num100);

// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.
/* This is an infinite loop because if the loop goes down everytime it loops it will 
forever be less than 2 */ 

let counterFour = 1;
while (counterFour >= -100) {
  console.log("HELP ME!");
  counterFour--;
};

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.

let num13 = 13;
n = 0;
do {
  console.log(n);
  n++;
} while (n <= num13);

// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)

let num32 = 32;
let q = 0;
do {
  if (q == num32){
    console.log(q + " is my favorite number!");
  } else {
    console.log(q + " is not my favorite number.");
  }
  q++;
} while (q <= 100);

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:
//You can use every loop for the same thing I think it's more about personal preference. 


// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++) {
  console.log("counting down from", outsideCounter);
  for (let insideCounter = outsideCounter; insideCounter >= 1; insideCounter--) {
    console.log("inside " + insideCounter);
  }
  console.log("***********************************");
}

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//

// Email your file to us or commit your file to GitHub and email us a link.
