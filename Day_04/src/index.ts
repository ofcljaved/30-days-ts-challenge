//--Activity 1

// Task 1
for (let i = 1; i <= 10; i++) {
  console.log("TASK 1 -:", i);
}
console.log("------------------------------------------------------");

// Task 2
for (let j = 1; j <= 10; j++) {
  console.log("5 x ", j, "=", 5 * j);
}

console.log("------------------------------------------------------");
//--Activity 2

// Task 3
let whale = 1;
let sumWhale = 0;
while (whale <= 10) {
  sumWhale += whale;
  whale++;
}
console.log("SUM of numbers from 1 to 10 is ", sumWhale);

console.log("------------------------------------------------------");
// Task 4
let revWhale = 10;
while (revWhale > 0) {
  console.log("TASK 4 -:", revWhale);
  revWhale--;
}

console.log("------------------------------------------------------");
//--Activity 3

// Task 5
let doWhale = 1;
do {
  console.log("TASK 5 -:", doWhale);
  doWhale++;
} while (doWhale <= 5);

console.log("------------------------------------------------------");
// Task 6
let factNum = 5;
let fact = 1;
do {
  if (factNum === 0) {
    break;
  } else {
    fact *= factNum;
  }
  factNum--;
} while (factNum > 0);
console.log("Factorial of 5 :", fact);

console.log("------------------------------------------------------");
//--Activity 4

// Task 7
for (let i = 1; i <= 5; i++) {
  let patt = "";
  for (let j = 0; j < i; j++) {
    patt += "* ";
  }
  console.log(patt);
}

console.log("------------------------------------------------------");
//--Activity 5

// Task 8
for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;
  console.log("TASK 8 -:", i);
}

console.log("------------------------------------------------------");
// Task 9
for (let i = 1; i <= 10; i++) {
  if (i === 7) break;
  console.log("TASK 9 -:", i);
}

console.log("------------------------------------------------------");
