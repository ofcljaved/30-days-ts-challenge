//--Activity 1

// Task 1
let fname = 'ofcljaved';
let age = 20;
console.log(`The name is ${fname}, and age is ${age}`);

// Task 2
let multilineStr = `Here we are
doing nothin
with you `;
console.log(multilineStr);

console.log('------------------------------------------------------');
//--Activity 2

// Task 3
let arr = [1, 2, 3, 4, 5];
const [a1, a2] = arr;
console.log('First elem:', a1, 'Second elem', a2);

// Task 4
let book = { title: 'US', author: 'Jiya', year: 2024 };
const { title, author } = book;
console.log(title, author);

console.log('------------------------------------------------------');
//--Activity 3

// Task 5
let arr1 = [12, 3, 45];
let newArr = [...arr1, 5, 2];
console.log('new array', newArr);

// Task 6
function infiniteSum(...args: number[]) {
  return args.reduce((acc, curr) => acc + curr, 0);
}
console.log(
  'Sum with rest operator function is :',
  infiniteSum(1, 2, 4, 6, 3, 5, 6)
);

console.log('------------------------------------------------------');
//--Activity 4

// Task 7
const findProduct = (a1: number, a2 = 10) => {
  return a1 * a2;
};
console.log(findProduct(2));
console.log(findProduct(3, 2));

//--Activity 5

// Task 8
let ages = 22;
let obj = {
  name: 'Javed',
  ages,
  findProduct,
};
console.log(obj);

// Task 9
let ar = 'Name';
let obj2 = {
  [ar]: 'Javed',
  name() {
    return 'Hello';
  },
};
console.log(obj2);
