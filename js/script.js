const button = document.querySelectorAll('.button'),
      display = document.querySelector('.display'),
      clear = document.querySelector('.clear'),
      support = document.querySelectorAll('.support'),
      shiftButton = document.querySelector('.js-shift'),
      cursor = '_';
let upper; //индикатор включенности шифта

//Возвращает заглавный символ
const toUpper = (item) => {
    return item.textContent.toUpperCase();
};

//Делает кнопку шифт активной или неактивной
const toShift = (up) => {
    if (up == '+') {
        shiftButton.classList.add('active');
        upper = '+';
    } else {
        shiftButton.classList.remove('active');
        upper = '-'; 
    }
};

const toAddText = (context = '') => {
    display.innerHTML += context + cursor;
};

//Функция удаления последнего символа
const toDel = (dir = '') => {
    if (!dir) {
        display.innerText = display.innerText.slice(0, -1);
    }   
};

//Прослушка вспомогательных кнопок
support.forEach (item => {
    item.addEventListener('click', () => {
        
        //Если это кнопка шифт
        if (shiftButton) {
                if (shiftButton.classList.contains('active')) {
                    toShift('-');
                } else {
                    toShift('+');
                }
        }

        //Если это кнопка стереть
        if (item.dataset.index == '35') {
            toDel(); //удаляет сначала курсор
            toDel(); //а потом сам символ
            toAddText(); 
            toShift('-'); //Если стираем после нажатия точки (у нее автоматический шифт)
            
            //Если мы стерли весь текстовый контент, то активируем шифт.
            if (display.textContent.length == '1') {
                toShift('+');
            }
        }
    });
});

//Прослушка всех кнопок
button.forEach (item => {
    item.addEventListener('click', () => {

        //Все кноки, кроме вспомогательных
        if (!item.classList.contains('support')) {
            //Индикация активности шифта
            if (upper == '+') {
                toDel();
                toAddText(toUpper(item));
                toShift('-');
            } else {
                toDel();
                toAddText(item.textContent);
            }
        }
        
        //Если нажали Энтер, то делаем перенос строки
        if (item.dataset.index == '38') {
            toDel();
            toAddText('<br>');
        }

        //Если нажали точку, то добавляем активацию шифта
        if (item.dataset.index == '36') {
            toShift('+');
        }
    });
});

//Кнопка удаления всего на дисплее
clear.addEventListener('click', () => {
    display.textContent = cursor;
    toShift('+');
});

//Пустой дисплей с текстовым курсором и активным шифтом
display.textContent = cursor; 
toShift('+');