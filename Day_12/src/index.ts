//--Activity 1

// Task 1
const throwError = () => {
  throw new Error('haha');
};

const errorFunc = () => {
  try {
    throwError();
  } catch (error) {
    console.log('throwError fucntion throws an error');
  }
};
errorFunc();

// Task 2
const divider = (numerator: number, denominator: number) => {
  if (denominator === 0) throw new Error("denominator can't be zero");
  return numerator / denominator;
};

const rejectsAfter2sec = () => {
  try {
    console.log(divider(2, 0));
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log('unexpected error', error);
    }
  }
};
rejectsAfter2sec();
//--Activity 2

// Task 3
const trycatchfinally = () => {
  try {
    console.log('Code reached try block');
    throwError();
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log('unexpected error', error);
    }
  } finally {
    console.log('Code reached finally');
  }
};
trycatchfinally();
//--Activity 3

// Task 4

class CustomError extends Error {
  constructor(public code: number, public message: string) {
    super(message);
    this.code = code;
  }
}
const customthrowError = () => {
  throw new CustomError(22, 'haha');
};

const customerrorFunc = () => {
  try {
    throwError();
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log('unexpected error', error);
    }
  }
};

customerrorFunc();

// Task 5
let str = '';

const validateStr = (string: string) => {
  if (!string.length) throw new CustomError(404, 'Empty string');
  else return string;
};
const rand = () => {
  try {
    validateStr(str);
  } catch (error) {
    if (error instanceof CustomError) {
      console.log(error.message, error.code);
    } else {
      console.log('unexpected error', error);
    }
  }
};
rand();

//--Activity 4

// Task 6
const randomPromise = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 10);
  random > 5 ? resolve(true) : reject(false);
});

const catchit = () => {
  randomPromise
    .then((v) => console.log(v, 'It resloves'))
    .catch((e) => console.log('it rejects why'));
};
catchit();

// Task 7
const catchitAsync = async () => {
  try {
    const value = await randomPromise;
    console.log(value, 'it resloves in async await ');
  } catch (error) {
    if (error instanceof CustomError) {
      console.log(error.message, 'It reject but in async await');
    } else {
      console.log('unexpected error', error);
    }
  }
};
catchitAsync();

//--Activity 5

// Task 8
const inavlidApiFetch = () => {
  fetch('https://api.javed.com/posts')
    .then((r) => {
      console.log(r);
      if (!r.ok) throw new CustomError(501, 'Not exist');
    })
    .catch((e) => {
      console.log('heheheehehehhe', e);
    });
};
inavlidApiFetch();

// Task 9
const invalidApiAsync = async () => {
  try {
    const res = await fetch('https://api.javed.com/posts');
    console.log(res);
    if (!res.ok) throw new CustomError(501, 'Not exist');
  } catch (error) {
    console.log(error);
  }
};
invalidApiAsync();
