//--Activity 1

let a = 2;
// Task 1
if (a > 0) {
  console.log("it's positive");
} else if (a < 0) {
  console.log("it's negative");
} else {
  console.log("it's zero");
}

// Task 2
let age = 22;
if (age >= 18) {
  console.log("You can vote no worries");
} else {
  console.log("You are not eligible");
}
//--Activity 2

// Task 3
let n1 = 3,
  n2 = 4,
  n3 = 22;
let largest = 0;
if (n1 >= n2) {
  if (n1 >= n3) {
    largest = n1;
  } else {
    largest = n3;
  }
} else if (n3 >= n2) {
  if (n3 >= n1) {
    largest = n3;
  } else {
    largest = n1;
  }
} else {
  largest = n2;
}
console.log(largest, "is largest out of", n1, n2, n3);

//--Activity 3

// Task 4
let daynum = 3;
switch (daynum) {
  case 1:
    console.log("It's Sunday");
    break;
  case 2:
    console.log("It's Monday");
    break;
  case 3:
    console.log("It's Tuesday");
    break;
  case 4:
    console.log("It's Wednesday");
    break;
  case 5:
    console.log("It's Thursday");
    break;
  case 6:
    console.log("It's Friday");
    break;
  case 7:
    console.log("It's Saturday");
    break;
  default:
    console.log("Invalid Day");
    break;
}

// Task 5
let score = 87;
switch (true) {
  case score >= 91:
    console.log("A grade");
    break;
  case score >= 81:
    console.log("B grade");
    break;
  case score >= 71:
    console.log("C grade");
    break;
  case score >= 61:
    console.log("D grade");
    break;
  default:
    console.log("F grade");
    break;
}
//--Activity 4

// Task 6
let evenOdd = 23;
const isEven = evenOdd % 2 === 0 ? "even" : "odd";
console.log(evenOdd, "It's", isEven);

//--Activity 5

// Task 7
let year = 1947;

if (year % 4 === 0 && year % 100 !== 0) {
  console.log("LEAP YEAR");
} else if (year % 100 === 0 && year % 400 === 0) {
  console.log("LEAP YEAR");
} else {
  console.log("NOT A LEAP YEAR");
}
