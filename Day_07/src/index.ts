//--Activity 1

// Task 1
const book: Record<string, any> = { title: "US", author: "Javed", year: 2030 };
console.log(book);

// Task 2
console.log("Title", book.title, "Author", book.author);

console.log("------------------------------------------------------");
//--Activity 2

// Task 3
book.details = function () {
  return `The book ${this.title} is written by ${this.author}`;
};
console.log(book.details());

// Task 4
book.updateYear = function (year: number) {
  this.year = year;
};
book.updateYear(2024);
console.log("Updated Obj", book);

console.log("------------------------------------------------------");
//--Activity 3

// Task 5
const library = {
  name: "JL",
  books: [book, { ...book, title: "Bros" }],
};
console.log(library);

// Task 6
console.log("Library Name:", library.name);
library.books.forEach((book) => console.log(book.title));

console.log("------------------------------------------------------");
//--Activity 4

// Task 7
book.details = function () {
  return `The book ${this.title} is written by ${this.author}`;
};
console.log(book.details());

//--Activity 5

// Task 8
for (const key in book) {
  if (Object.prototype.hasOwnProperty.call(book, key)) {
    console.log("With key:", key, "the value is:", book[key]);
  }
}

// Task 9

const allKeys = Object.keys(book);
const allValues = Object.values(book);

console.log("All keys", allKeys);
console.log("All values", allValues);
