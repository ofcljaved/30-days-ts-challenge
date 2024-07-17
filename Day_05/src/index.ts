//--Activity 1

// Task 1
function evenOdd(num: number) {
  if (num % 2 === 0) {
    console.log(num, "is even");
  } else {
    console.log(num, "is odd");
  }
}
evenOdd(3);

// Task 2
function doSquare(num: number) {
  return num * num;
}

console.log("Square of 4 is :", doSquare(4));
console.log("------------------------------------------------------");
//--Activity 2

// Task 3
function maxoftwo(n1: number, n2: number) {
  if (n1 >= n2) return n1;
  else return n2;
}
console.log("Max of two numbers 3 and 22 is ", maxoftwo(3, 22));

// Task 4
function concatTwoString(str1: string, str2: string) {
  return str1 + str2;
}

console.log("Concat of two 'hel' and 'lo' is:", concatTwoString("hel", "lo"));

console.log("------------------------------------------------------");
//--Activity 3

// Task 5
const doSum = (a: number, b: number) => {
  return a + b;
};
console.log("Sum of 4 and 3 is :", doSum(4, 3));

// Task 6
const findWord = (str: string) => {
  return str.toLowerCase().includes("hel");
};
console.log("hel exist in hello?", findWord("HeLLo"));

console.log("------------------------------------------------------");
//--Activity 4

// Task 7
function doProduct(a: number, b: number = 23) {
  return a * b;
}
console.log("product of 3 and 4 is :", doProduct(3, 4));

// Task 8
function greetUser(name: string, age: number = 18) {
  console.log("Hello!!", name, age >= 18 ? "You're old" : "You're young");
}
greetUser("Jinx");

//--Activity 5

// Task 9
function callFn(fn: Function, times: number) {
  fn(times);
  times -= 1;
  if (times === 0) return;
  callFn(fn, times);
}

callFn((num: number) => {
  console.log("This is", num, "call");
}, 5);
console.log("------------------------------------------------------");

// Task 10
function itTakesTwo(fn1: Function, fn2: Function, val: string) {
  const res = fn1(val);
  console.log(fn2(res));
}

itTakesTwo(
  (str: string) => {
    return "Hello " + str;
  },
  (str: string) => {
    return str + " It's nice to meet you!";
  },
  "Jinx"
);
console.log("------------------------------------------------------");
