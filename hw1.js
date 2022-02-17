// Loops
// 1. Write a for loop that logs only logs even numbers from 0 - 10; ie 0,2,4,..10
console.log("even number loop:")
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}


// 2. Write a for that logs numbers from 10 - 0; ie 10,9,8...0
console.log("\nbackwards loop:")
for (let i = 10; i >= 0; i--) {
    console.log(i)
}
// 3. write a for loop that loops through this array and logs 'odd/even' based on wether the number is odd even
console.log("\nodd/even:")
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log('Even: ' + i);
    } else {
        console.log('ODD: ' + i);

    }
}

// 4. write a while loop that starts at 0 and counts up to 10 ie: 0,1,2,3....10
console.log("\nwhile loop:")
let i = 0;
while (i <= 10) {
    console.log(i)
    i++;
}

// 5. Look closely at the code below

const isOdd = (num) => {
    return num % 2 != 0
}

if (isOdd(2)) {
    console.log('is Odd')
} else {
    console.log('is Even')
}

// 6. what will this log? odd
// 7. what is the value of isOdd(2) true

// 8. Fix the isOdd function to make this work

// Functions
// 1. Write a function that takes a positive number and prints all even numbers from 0 – number
const printUpTo = (num) => {
    for (let i = 0; i <= num; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}
printUpTo(8)
// 2. Write a function that takes an array and returns the sum of all the numbers
const arraySum = (ary) => {
    var total = 0;
    for (var i = 0; i < ary.length; i++) {
        total += ary[i];
    }
    return total
}


// 3. Write a function that returns the number of vowels in string
const vowelCount = (str) => {
    var total = 0;
    var vowels = "aeiou"
    for (var i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            total++
        }
    }
    return total
}
console.log(vowelCount("katherine"))
// 4. Write a function that takes a math operator, as a string, ('*','/','+','-') and two numbers and returns the result
const doMath = (op, n1, n2) => {
    if (op==='*'){
        return n1*n2
    }
    if (op==='/'){
        return n1*n2
    }
    if (op==='+'){
        return n1*n2
    }
    if (op==='-'){
        return n1*n2
    }
    
}
// 5. Write a function that takes an array of strings and a string and returns true or false if the string is in the array.
const isInArray = (strarry, str) => {
   return strarry.includes(str)
}
console.log(isInArray(["abc","def","ghi","jkl"], "mno"))
// 6. write a function that takes a person object {firstname: 'joe', lastname: 'shmoe', age: 50} and returns a formatted string "joe shmoe is 50 years old"
//let firstName = Joe
//let lastName = Shmoe
//let age = 50

//console.log{firstName + lastName + age}

// 7. write a function that takes an array that removes the first and last items and return that new array

// 8. write a function that swaps the last and first items of an array 
let array = [1,2,3.4] 
const swap = (array)=>{
    console.log(array)
    let firstItem = 
}

// 9. write a function that takes a array and a second argument and returns the index in the array of the second argument
// 10. write a function that takes a number and uses a ternary to return if the number is odd or even.
// 11. Write a function that prints all  numbers from 0 – 10



//Homework 2


const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names


//2. Get array of all heights
//3. Get array of objects with just name and height properties
//4. Get array of all first names

//***REDUCE***
//1. Get total mass of all characters
//2. Get total height of all characters
//3. Get total number of characters by eye color
//4. Get total number of characters in all the character names

//***FILTER***
//1. Get characters with mass greater than 100
//2. Get characters with height less than 200
//3. Get all male characters
//4. Get all female characters

//***SORT***
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?

//***Bonus***/
// come up with your own
