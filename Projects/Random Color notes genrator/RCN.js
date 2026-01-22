let btn = document.querySelector('button');
let main = document.querySelector('main');

btn.addEventListener('click', function () {
    let div = document.createElement('div');

    let x = Math.random() * 100;
    let y = Math.random() * 100;

    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.backgroundColor = `rgb(${r},${g},${b})`;

    div.style.position = 'absolute';
    div.style.left = x + '%';
    div.style.top = y + '%';

    main.appendChild(div);
});
