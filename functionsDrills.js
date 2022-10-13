/*
 * Before you start, add this javascript file in a script tag in index.html.
 *
 * Tip: Comment out your solution to a prompt before moving on to the next one.
 * It will keep your console clean and easy to read!
 */

/*
 * Prompt 1:
 *
 * Write a function, using the function keyword. Call the function sayHello.
 * When invoked, sayHello should print the string 'hello world'.
 */

const sayHello = () => {
  console.log("hello world");
};
sayHello();
/*

 * Prompt 2:
 *
 * Create a function called print. Print should take a parameter called message.
 * When invoked and passed a string, print should `console.log` the message.
 */

const print = (message) => {
  console.log(message);
};
print("Life is good");

/*
 * Propt 3:
 *
 * Create a function called printMessage. This function should take a parameter
 * called message. When invoked and passed a string, print 'Today's message
 * is:', followed by the message passed in as a parameter.
 */

const printMessage = (message) => {
  console.log(`Todays message is: ${message}`);
};
printMessage("Be Happy!");

/*
 * Prompt 4:
 *
 * Fix the following function:
 */

/** Starter Code */
function fixFunction(a) {
  return a ** 2;
}
console.log(fixFunction(4));
/*
 * Prompt 5:
 *
 * Create a function called reverseMessage. This function should take
 * a parameter called message. When invoked and passed a string, print the
 * string in reverse. (hint: look up some ways of doing this.)
 */

const reverseMessage = (message) => {
  return message.split("").reverse().join("");
};
console.log(reverseMessage("Loving you"));

/*
 * Prompt 6:
 *
 * Create a function called multiply that takes two parameters: a and b. When
 * invoked, multiply a times b. If b an argument is not passed in for b, then
 * double a (i.e. multiply it by two).
 *
 * Hint: use a default parameter.
 */

const multiply = (a, b = 10) => {
  if (b != 10) {
    return 2 * a;
  } else {
    return a * b;
  }
};
console.log(multiply(8, 12));

/*
 * Prompt 7:
 *
 * Fix the following code. HINT: Think Objects :)
 */

/** Starter Code */
function makePerson(firstname, lastname) {
  const name = {
    firstName: firstname,
    lastName: lastname,
  };
  return console.log(`${name.firstName} ${name.lastName}`);
}
makePerson("Zakk", "Frank");
makePerson("Jimmy", "Brown");

/*
 * Prompt 8:
 *
 * Write a function that returns an object. The object can be anything.
 */
const userInfo = (name, city, state) => {
  const user = {
    name: name,
    city: city,
    state: state,
  };
  return console.log(user);
};
userInfo("Bob", "New York City", "New York");
/*
 * Prompt 9:
 *
 * Write a function that returns an array. The array can be of anything.
 */

const returnArray = () => {
  const getInfo = ["Smity", 34, "Oklahoma"];
  return console.log(getInfo);
};
returnArray();

/*
 * Prompt 10:
 *
 * Write a function that, when called, adds a number passed in as a parameter to
 * the sum variable below. Invoke your method a few times and then print the sum
 */

/** Starter Code */
let sum = 0;
const addToSum = (a) => {
  return console.log(sum + a);
};
addToSum(14);
addToSum(10);
addToSum(109);
/*
 * Prompt 11:
 *
 * Write a function that takes an array of number values and returns the sum.
 * Test it out to make sure it works.
 */

const returnSum = () => {
  const newArray = [15, 78, 35];
  return newArray[0] + newArray[1] + newArray[newArray.length - 1];
};
console.log(returnSum());

/*
 * Prompt 12:
 *
 * Write a function that takes a string and returns an array of every word in
 * the string.
 */

const turnArray = (message) => {
  return message.split(" ");
};
console.log(turnArray("Their movements are great"));

/*
 * Prompt 13:
 *
 * How can you write a function so that this expression works? It should print
 * the string "this works!"
 */

/** Starter Code */
// testFunc()();

/*
 * Prompt 14:
 *
 * Write a function that takes the add function below as a parameter and invokes
 * it, passing in 2 and 4.
 */

/** Starter Code */
// function add(a, b) {
//   return a + b;
// }

// const callFunct = (fnx, a, b) = {
//   fnx(a, b);
// }
// callFunct(add, 2, 4);

/*
 * Prompt 15:
 *
 * Write a function that returns another function. Have the inner function print
 * the string "hello world"
 
 */
