


// -------------------------------- Assignment 2 -------------------------------------------


// Create an array containing the numbers 1 to 10 ---------------------------------------------

// let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// Access the third element of the array ---------------------------------------------------------

// let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log (numberArray[2]);

// Change the value of the last element to 0 ---------------------------------------------------------

// let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let last = numberArray[numberArray.length - 1] = 0

// console.log(numberArray);


// Add a new element to the end of the array ---------------------------------------------------------

// let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numberArray.push(11);
// console.log(numberArray);

// Remove the first element from the array ------------------------------------------------------------

// let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numberArray.shift(0);
// console.log(numberArray);


// Find the index of the number 5 in the array ----------------------------------------------------------

// let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numberArray.indexOf(5));


// Check if the array contains the number 8 ---------------------------------------------------------------

// let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// targetNumber = 8;

// if(numberArray.includes(targetNumber)){
//     console.log(`Yes, the ${targetNumber} exist in the Array.`);
// }else{
//     console.log(`The ${targetNumber} does not exist in the Array.`);


// Reverse the order of the elements in the array -----------------------------------------------------------

// let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numberArray = numberArray.reverse();

// console.log(numberArray);


// Sort the array in ascending order ----------------------------------------------------------------------------

// let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const ascending = (a, b) => a - b;
// console.log(numberArray.sort(ascending));


// Create a new array containing only the even numbers from the original array --------------------------------------

// let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenArray = mainArray => mainArray.filter(element => element % 2 === 0);
// let sortedArray = evenArray(numberArray);

// console.log(`The new array is: ${sortedArray}`);








// Write a while loop that prints the numbers from 1 to 10 ----------------------------------------------------

// let i = 1;

// while (i <= 10){
//     console.log(i);
//     i++;
// }


// Write a while loop that sums all the numbers in an array ------------------------------------------------------

// let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let i = 0;
// let sum = 0;

// while (i < numberArray.length){
//     sum += numberArray[i];
//     i++;
// };

// console.log(`The sum of all the numbers in the array is: ${sum}`);


// Write a while loop that finds the largest number in an array -----------------------------------

// let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let i = 0;
// let max = numberArray[0];

// while (i < numberArray.length){
//     if (numberArray[i] > max){
//         max = numberArray[i];
//     };
//     i++
// };

// console.log(`The largest number in the array is: ${max}`);


// Write a while loop that prompts the user for input until they enter a valid email address ---------------------------------

// let isValidEmail = false;

// let email;

// while (!isValidEmail) {
//     email = prompt("Enter your email:");

//     const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     isValidEmail = emailCheck.test(email);

//     if (!isValidEmail) {
//         alert("Please enter a valid email.");
//     }
// }

// console.log(`Hi ${email}, thank you for registering.`);



// Write a while loop that simulates a dice roll until a 6 is rolled ------------------

// let diceResult;
// let rolls = 0;

// while (diceResult !== 6){
//     diceResult = Math.floor(Math.random() * 6) + 1;
//     console.log(`roll again`);

//     if(diceResult === 6){
//         console.log(`At roll ${rolls}: You rolled a ${diceResult}`)
//     }

//     rolls++
    
// }




// Use the forEach method to print each element of an array ------------------------



// let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numberArray.forEach(function(element){
//     console.log(element);
// });

// Use the forEach method to double each element of an array -----------------------

// let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numberArray.forEach(function(element, index, array){
//     array[index] = element * 2;
// });

// console.log(numberArray);



// Use the forEach method to create a new array containing only the strings
// from a mixed array -----------------------------------------

// let arrayOfString=[];

// let mixedArray = [1, 2, `john`, 3, 4, `joseph`, `madison`, 5, 6, 7, `evanson`, 8, 9, `brendan`, 10];

// mixedArray.forEach(function(element){
//         if (typeof element === `string`){
//             arrayOfString.push(element);
//         }
//     });

//     console.log(arrayOfString);



    // Use the forEach method to find the sum of all even numbers in an array ------------

// let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;

// numberArray.forEach(function(element){
//     sum += element;
// })

// console.log(sum);


// Use the forEach method to filter an array based on a certain condition ---------------


// let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let oddNumberArray = [];

// numberArray.forEach(function(element){
//     if(element % 2 !== 0){
//         oddNumberArray.push(element);
//     }
// });

// console.log(oddNumberArray);


// Define a function that accepts any number of arguments using rest parameters ---------


// const anyNumber = (...items) => console.log(items);

// anyNumber(`rice`, `chicken`, `water`, `fish`, `chess`, `book`);


// Use rest parameters to create a function that calculates the average of a list of numbers ---------------------

// function average (...numbers){

//     if(numbers === 0){
//         return 0;
//     }
    

//     let sum = numbers.reduce((all, numb) => all + numb, 0);
//     return sum / numbers.length;
// };

// console.log(average(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));



// Use rest parameters to create a function that logs all the arguments passed to it--------


// function allArguments (...all){
//     console.log(all);
// }

// allArguments(`Samsung`, `MacBook`, `HDMI`, `Rode`, `Laverlia`)



// Use rest parameters to create a function that combines multiple arrays into a single array ---------------------------------------

// let array1 = [`Samsung`, `MacBook`, `HDMI`, `Rode`, `Laverlia`];
// let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function combinedArray (...combined){
//     return combined.reduce((a,b)=>a.concat(b), [])
// };

// let allArray = combinedArray(array1, array2);

// console.log(allArray);



// Use rest parameters to create a function that accepts a variable number of objects and merges them into a single object ------------------------------------


// function multipleObjects (...objects){
//     return Object.assign({}, ...objects);
// };

// let object1 = {name: `Evanson`, age: 26, address: `Lagos`};
// let object2 = {laptop: `MacBook`, height: `5.9ft`};

// let allObjects = multipleObjects(object1, object2);

// console.log(allObjects);



// Create an object literal representing a person with properties for name, age, and address ---------------------------------------


// let person = {
//     name: `Joseph`,
//     age: 26,
//     address: `Lagos`
// }


// Access the name property of the person object ----------------------------

// let person = {
//     name: `Joseph`,
//     age: 26,
//     address: `Lagos`
// }

// console.log(person.name);


// Change the value of the age property -------------------------------------

// let person = {
//     name: `Joseph`,
//     age: 26,
//     address: `Lagos`
// }

// person.age = 30;

// console.log(person);


// Add a new property to the object called "email" --------------------------------

// let person = {
//     name: `Joseph`,
//     age: 26,
//     address: `Lagos`
// }

// person.email = `joseph212@gmail.com`

// console.log(person);



// Delete the address property from the object -------------------------

// let person = {
//     name: `Joseph`,
//     age: 26,
//     address: `Lagos`
// }

// person.email = `joseph212@gmail.com`

// delete person.age

// console.log(person);



// Write a for loop that prints the numbers from 1 to 10 -------------------------




// for (let i = 1; i <= 10; i++){
//     console.log(i);
// };


// Write a for loop that sums all the numbers in an array -----------------------------


// let numbArray = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];
// let sum = 0;

// for (let i = 0; i <= numbArray.length; i++){
//     sum += i;
// };

// console.log(sum)



// Write a for loop that finds the largest number in an array -------------------------

// let numbArray = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];
// let largestNumber = numbArray[0];

// for ( let i = 0; i <= numbArray.length; i++){
//     if(numbArray[i] > largestNumber){
//         largestNumber = numbArray[i];
//     };
// };

// console.log(largestNumber);


// Write a for loop that creates a new array containing the squares of the
// numbers in another array -----------------------------------


// let mainArray = [2, 4, 6, 8, 10, 12, 14, 16]
// let squareArray = [];

// for (let i = 0; i < mainArray.length; i++){
//     squareArray.push((mainArray[i] * mainArray[i]))
// }

// console.log(squareArray);



// Write a for loop that iterates over an object's properties and values -------------

// let person = {
//     name: `Joseph`,
//     age: 26,
//     address: `Lagos`,
//     email: `joseph123@gmail.com`
// }

// for ( let key in person){
//     if (person.hasOwnProperty(key)){
//         console.log(`${key}: ${person[key]}`)
//     }
// };


// Use a for...of loop to print each element of an array ---------------------------

// let numbArray = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];

// for ( const elements of numbArray ){
//     console.log(elements);
// };


// Use a for...of loop to create a new array containing the string lengths of each
// element in another array ---------------------------------------

// let stringArray = [`Samsung`, `MacBook`, `HDMI`, `Rode`, `Laverlia`];
// let stringLegth = [];

// for (const string1 of stringArray){
//     stringLegth.push(string1.length);
// };

// console.log(stringLegth);




// Use a for...of loop to iterate ooweler the keys of an object ---------------------

// let person = {
//     name: `Joseph`,
//     age: 26,
//     address: `Lagos`,
//     email: `joseph123@gmail.com`
// }

// const personKey = Object.keys(person);

// for (const iterate of personKey){
//     console.log(iterate)
// }


// Use a for...of loop to iterate over the values of an object ---------------------

// let person = {
//     name: `Joseph`,
//     age: 26,
//     address: `Lagos`,
//     email: `joseph123@gmail.com`
// }

// const personValue = Object.values(person);

// for (const iterate of personValue){
//     console.log(iterate)
// }



// Use a for...of loop to iterate over both keys and values of an object -------------

// let person = {
//     name: `Joseph`,
//     age: 26,
//     address: `Lagos`,
//     email: `joseph123@gmail.com`
// }

// const infoObject = Object.entries(person)

// for (const [key, value] of infoObject){
//     console.log(`${key}: ${value}`);
// }



// Explain the difference between a while loop and a for loop -----------------------

// while loop is used to execute a block of code when you are not specific about how many times it should run, so it runs for as long as the specified condition remains true.

// for loop is used when you are specific on how many times a block of code should be executed.



// When would you use the forEach method over a traditional for loop --------------

// when there is a callback function to be used on each element of the array 



// What are the benefits of using rest parameters -------------------

// it gives room for an unknown number of arguments



// How can you create nested objects using object literals ------------------------

// by putting an object inside another object.


// What are the different ways to iterate over an array in JavaScript -----------------

// using for loop, for...of loop, foreach method, for...in loop , map  filter method...


// Write a function that removes duplicates from an array ------------------------


// let mainArray = [1, 1, 2, 3, 4, 4, 5, 2, 6, 8, 11, 25, 30, 70, 11, 5, 70];
// let newArray = noDuplicate(mainArray);

// console.log(mainArray);
// console.log(newArray);





// Write a function that merges two arrays without duplicates -----------------------

// function noDuplicate (array){
//     return Array.from(new Set(array))
// }

// const array1 = [1, 1, 2, 3, 4, 4, 5,];
// const array2 = [5, 6, 7, 8, 9, 10];

// const mergedArray = [...array1, ...array2];

// let newArray = noDuplicate(mergedArray);

// console.log(newArray);



// Write a function that checks if two arrays have any common elements -----------------

// function commonElements(array1, array2) {
//     return array1.some(element => array2.includes(element));
// };

// const array1 = [1, 1, 2, 3, 4, 4, 5,];
// const array2 = [5, 6, 7, 8, 9, 10];

// let main = commonElements(array1, array2);

// console.log(`Array 1:`, array1);
// console.log(`Array 2:`, array2);
// console.log(`Is there any common element?:`, main ? `YES` : `NO`)





// Write a function that creates a new array containing only the unique elements
// from two arrays ------------------------------

// function commonElements(array1, array2) {
//     return array1.filter(element => array2.includes(element));
// }

// const mainArray1 = [1, 1, 2, 3, 4, 4, 5,];
// const mainArray2 = [5, 6, 7, 8, 9, 10];

// const common = commonElements(mainArray1, mainArray2);

// console.log(`Array 1:`, mainArray1);
// console.log(`Array 2:`, mainArray2);
// console.log(`Common Elements: ${common}`);



// Write a function that flattens a nested array into a single-level array --------


// function flatten (allArrays){

//     let newArray = [];

//     allArrays.forEach(element => {
//         if (Array.isArray(element)){
//             newArray = newArray.concat(flatten(element));
//         }else{
//             newArray.push(element);
//         }
//     });

//     return newArray;
// };

// let mainArray = [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11, 12, 13]];

// let result = flatten(mainArray);

// console.log(`Original Array: ${mainArray}`);
// console.log(`Flattened Array: ${result}`);
