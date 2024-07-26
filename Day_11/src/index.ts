//--Activity 1

// Task 1
const resolvesAfter2sec = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("It'll resolve");
    }, 2000);
  });

resolvesAfter2sec().then((msg) => console.log(msg));

// Task 2
const rejectsAfter2sec = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("It'll reject");
    }, 2000);
  });

rejectsAfter2sec().catch((msg) => console.log(msg));

//--Activity 2

// Task 3
const p1 = new Promise((resolve, reject) => resolve('First Promise'));
const p2 = new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve('Promise after 1 sec');
  }, 1000)
);
const p3 = new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve('Promise after .5 sec');
  }, 500)
);

const execute = () => {
  p1.then((msg) => {
    console.log(msg);
    return p2;
  })
    .then((msg) => {
      console.log(msg);
      return p3;
    })
    .then((msg) => console.log(msg));
};
execute();

//--Activity 3

// Task 4
const asyncawaitresolve = async () => {
  const msg = await resolvesAfter2sec();
  console.log(msg, 'USING ASYNC AWAIT');
};
asyncawaitresolve();

// Task 5
const asyncawaitreject = async () => {
  try {
    await rejectsAfter2sec();
  } catch (error) {
    console.log(error, 'USING ASYNC AWAIT');
  }
};
asyncawaitreject();

//--Activity 4

// Task 6
const fetchUsingPromise = () => {
  fetch('https://api.restful-api.dev/objects/7')
    .then((res) => res.json())
    .then((data) => console.log(data));
};
fetchUsingPromise();

// Task 7
const fetchUsingAsync = async () => {
  const res = await fetch('https://api.restful-api.dev/objects/6');
  const data = await res.json();
  console.log(data);
};
fetchUsingAsync();

//--Activity 5

// Task 8
const allPromise = async () => {
  try {
    const res = await Promise.all([p1, p2, p3]);
    res.forEach((r) => console.log(r, 'using promise all'));
  } catch (error) {}
};
allPromise();

// Task 9
const promsieRace = async () => {
  try {
    const res = await Promise.race([p1, p2, p3]);
    console.log(res, 'FULL RACE');
  } catch (error) {}
};
promsieRace();
