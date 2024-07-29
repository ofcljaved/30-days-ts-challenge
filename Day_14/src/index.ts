//--Activity 1

class Person {
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hello ${this.name}, Your age is ${this.age}`;
  }
  updateAge(age: number) {
    this.age = age;
  }
  static greeting() {
    return `Hello everyone`;
  }
  get fullname() {
    return this.name;
  }
  set yourname(name: string) {
    this.name = name;
  }
}

// Task 1
const person = new Person('javed', 27);
console.log(person.greet());

// Task 2
const person2 = new Person('jave', 12);
console.log(person2.updateAge(23));

//--Activity 2

// Task 3
class Student extends Person {
  constructor(
    public age: number,
    public name: string,
    public studentId: number
  ) {
    super(name, age);
    this.studentId = studentId;
    Student.count += 1;
  }
  getId(): number {
    return this.studentId;
  }
  greet(): string {
    return `Hello ${this.name}, Your age is ${this.age} with id :${this.studentId}`;
  }
  static count = 0;
}

const stud1 = new Student(23, 'balram', 12);
console.log(stud1.getId());

// Task 4
const stud2 = new Student(23, 'balram', 12);
console.log(stud1.greet());

//--Activity 3

// Task 5
console.log(Person.greeting());

// Task 6
console.log(Student.count, 'total number of students');

//--Activity 4

// Task 7
const per4 = new Person('sofia', 34);
console.log(per4.fullname);

// Task 8
const per5 = new Person('siri', 44);
per5.yourname = 'nana';
console.log(per5.fullname);

//--Activity 5

// Task 9
class Account {
  private _bal: number = 0;
  constructor() {}
  update(amt: number) {
    this._bal += amt;
  }
  get balance() {
    return this._bal;
  }
}

// Task 10
const acc = new Account();
acc.update(1233);
console.log('Balance:', acc.balance);
acc.update(-222);
console.log('Balance:', acc.balance);
