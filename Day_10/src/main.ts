//--Activity 1

// Task 1
const btn = document.querySelector('button');
btn?.addEventListener('click', () => {
  const para = document.querySelector<HTMLParagraphElement>('p')!;
  para.textContent = ` some random shit with ${Math.random()}`;
});

// Task 2
const imgElem = document.querySelector('img');
imgElem?.addEventListener('dblclick', () => {
  imgElem.style.visibility = 'hidden';
});

//--Activity 2

// Task 3
const randomCOLORValue = () => Math.floor(Math.random() * 255);
const randomBg = () =>
  `rgb(${randomCOLORValue()},${randomCOLORValue()},${randomCOLORValue()})`;
const divBg = document.querySelector<HTMLDivElement>('.changebg');
divBg?.addEventListener('mouseover', () => {
  divBg.style.backgroundColor = randomBg();
});

// Task 4
divBg?.addEventListener('mouseout', () => {
  divBg.style.backgroundColor = 'red';
});

//--Activity 3

// Task 5
const input = document.querySelector<HTMLInputElement>('input');

input?.addEventListener('keydown', (evt) => {
  console.log(evt.key);
});

// Task 6
const inputP = document.querySelector<HTMLParagraphElement>('.input');

input?.addEventListener('keyup', (evt) => {
  inputP!.innerText += evt.key;
});

//--Activity 4

// Task 7
const form = document.querySelector<HTMLFormElement>('form');

form?.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(form);
  formData.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
});

// Task 8
const select = document.querySelector<HTMLSelectElement>('select');
const pSelect = document.querySelector<HTMLParagraphElement>('#select');
select?.addEventListener('change', (evt) => {
  pSelect!.innerText = (evt.target as HTMLSelectElement)!.value;
});

//--Activity 5

// Task 9
const list = document.querySelector<HTMLUListElement>('ul');
list?.addEventListener('click', (evt) => {
  console.log((evt.target as HTMLUListElement)!.textContent);
});

// Task 10
const parent = document.querySelector<HTMLDivElement>('#random');
parent?.addEventListener('click', (evt) => {
  console.log(
    (evt.target as HTMLDivElement).parentNode === parent,
    'See this is parent'
  );
});
