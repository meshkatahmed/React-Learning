// variable declaration
let number = 0;

// root div
let doc = document.getElementById('root');

// 1st child
let p = document.createElement('p');
p.innerText = number;
doc.appendChild(p);

// 2nd child
let btn = document.createElement('button');
btn.innerHTML = 'Increment';
doc.appendChild(btn);

// event listener
btn.addEventListener('click',() => {
    number++;
    p.innerText = number;
});

// 2nd
// variable declaration
let number2 = 0;

// root div
let doc2 = document.getElementById('root');

// 1st child
let p2 = document.createElement('p');
p2.innerText = number2;
doc2.appendChild(p2);

// 2nd child
let btn2 = document.createElement('button');
btn2.innerHTML = 'Increment';
doc2.appendChild(btn2);

// event listener
btn2.addEventListener('click',() => {
    number2++;
    p2.innerText = number2;
});

// 3rd
// variable declaration
let number3 = 0;

// root div
let doc3 = document.getElementById('root');

// 1st child
let p3 = document.createElement('p');
p3.innerText = number3;
doc3.appendChild(p3);

// 2nd child
let btn3 = document.createElement('button');
btn3.innerHTML = 'Increment';
doc3.appendChild(btn3);

// event listener
btn3.addEventListener('click',() => {
    number3++;
    p3.innerText = number3;
});