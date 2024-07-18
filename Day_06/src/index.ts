//--Activity 1

// Task 1
const arr1 = [1, 2, 3, 4, 5];
console.log(arr1);

// Task 2
console.log("First element", arr1[0], "Last element", arr1[arr1.length - 1]);

console.log("------------------------------------------------------");
//--Activity 2

// Task 3
arr1.push(6);
console.log("array after push", arr1);

// Task 4
arr1.pop();
console.log("array after pop", arr1);

// Task 5
arr1.unshift(0);
console.log("array after unshift", arr1);

// Task 6
arr1.shift();
console.log("array after shift", arr1);

console.log("------------------------------------------------------");
//--Activity 3

// Task 7
const doubleArr = arr1.map((i) => i * 2);
console.log("double array", doubleArr);

// Task 8
const evenArr = arr1.filter((i) => i % 2 === 0);
console.log("Even array", evenArr);

// Task 9
const sumOfArr = arr1.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of arr", sumOfArr);

console.log("------------------------------------------------------");
//--Activity 4

// Task 10
for (let i = 0; i < arr1.length; i++) {
  console.log("Element at ", i, " is ", arr1[i]);
}

// Task 11
arr1.forEach((elem) => {
  console.log("Element using foreach,", elem);
});

//--Activity 5

// Task 12
const arr2D = [
  [1, 2, 3, 4],
  ["a", "b", "c", "d"],
  [5, 6, 7, 8],
];
console.log("THis is 2D array", arr2D);

console.log("------------------------------------------------------");

// Task 13
const elementFrom2Darr = arr2D[1][3];
console.log("Element from 2D arr", elementFrom2Darr);
