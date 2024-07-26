//--Activity 1

// Task 1
document.getElementById('title')!.innerText = 'This is new title';

// Task 2
const classElem: HTMLElement = document.querySelector('.changeBg')!;
classElem.style.backgroundColor = 'red';

//--Activity 2

// Task 3
const someDiv = document.createElement('div');
someDiv.textContent = "I'm some div appended here";
document.querySelector('#app')!.append(someDiv);

// Task 4
const newLi = document.createElement('li');
newLi.textContent = 'Vohoo tranfered by js';
document.querySelector('ul')!.appendChild(newLi);

//--Activity 3

// Task 5
const removeIt = document.querySelector('.remove')!;
removeIt.remove();

// Task 6
document.querySelector('#app')?.lastElementChild?.remove();

//--Activity 4

// Task 7
const imgElem = document.querySelector('img')!;

imgElem.setAttribute('src', 'https://picsum.photos/id/23/200');

// Task 8
const changeClass = document.querySelector('.red')!;
changeClass.classList.remove('red');
changeClass.classList.add('blue');

//--Activity 5

// Task 9
const btn = document.querySelector('button');
btn?.addEventListener('click', () => {
  const para = document.querySelector<HTMLParagraphElement>('p')!;
  para.style.color = 'gray';
});

// Task 10
const changeBorder: HTMLElement = document.querySelector('.border')!;
changeBorder.addEventListener('mouseover', () => {
  changeBorder.style.borderColor = 'white';
});
changeBorder.addEventListener('mouseout', () => {
  changeBorder.style.borderColor = 'red';
});
