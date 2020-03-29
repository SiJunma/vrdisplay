const button = document.querySelectorAll('.button'),
      display = document.querySelector('.display'),
      clear = document.querySelector('.clear'),
      support = document.querySelectorAll('.support');
let upper;

const shift = (item) => {
    return item.textContent.toUpperCase();
};

display.textContent = '|';

support.forEach (item => {
    item.addEventListener('click', () => {
        if (item.dataset.index == '34') {
            
                if (item.classList.contains('active')) {
                    item.classList.remove('active');
                    upper = '-';
                } else {
                    item.classList.add('active');
                    upper = '+';
                }
        }

        if (item.dataset.index == '35') {
            display.innerText = display.innerText.slice(0, -1);
            display.innerText = display.innerText.slice(0, -1);
            display.innerHTML += '|'; 
        }
    });
});

button.forEach (item => {

    item.addEventListener('click', () => {
        if (!item.classList.contains('support')) {
            if (upper == '+') {
                display.innerText = display.innerText.slice(0, -1);
                display.innerHTML += shift(item) + '|';

                for (let i of button) {
                    if (i.dataset.index == '34') {
                        i.classList.remove('active');
                        upper = '-';
                    }
                };

            } else {
                display.innerText = display.innerText.slice(0, -1);
                display.innerHTML += item.textContent + '|';
            }
            
        }
        
        if (item.dataset.index == '38') {
            display.innerText = display.innerText.slice(0, -1);
            display.innerHTML += '<br>' + '|';
        }

        if (item.dataset.index == '36') {
            display.innerText = display.innerText.slice(0, -1);
            display.innerText += '|';
            upper = '+'

            for (let i of button) {
                if (i.dataset.index == '34') {
                    i.classList.add('active');
                }
            };
        }

    });
});

clear.addEventListener('click', () => {
    display.textContent = '|';
});
