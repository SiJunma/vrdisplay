const button = document.querySelectorAll('.button'),
      display = document.querySelector('.display'),
      clear = document.querySelector('.clear');
const support = document.querySelectorAll('.support');
let upper;

const shift = (item) => {
    return item.textContent.toUpperCase();
};

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
            let text = display.innerText;
            display.innerText = text.slice(0, -1); 
        }
    });
});

button.forEach (item => {
    item.addEventListener('click', () => {
        if (item.dataset.index !== '34' && item.dataset.index !== '35') {
            if (upper == '+') {
                display.textContent += shift(item);
            } else {
                display.textContent += item.textContent;
            }
            
        } 
    });
});

clear.addEventListener('click', () => {
    display.textContent = '';
});
