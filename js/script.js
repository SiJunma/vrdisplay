const button = document.querySelectorAll('.button'),
      display = document.querySelector('.display'),
      clear = document.querySelector('.clear'),
      support = document.querySelectorAll('.support'),
      shiftButton = document.querySelector('.js-shift'),
      capsButton = document.querySelector('.caps'),
      cursor = '_';

//Делает кнопку шифт активной или неактивной
const toShift = (up) => {
    if (up == '+') {
        shiftButton.classList.add('active');
        for (let item of button) {
            if (!item.classList.contains('support')) {
                item.textContent = item.textContent.toUpperCase();
            }
        } 
            
    } else {
        shiftButton.classList.remove('active');
        for (let item of button) {
            if (!item.classList.contains('support')) {
                item.textContent = item.textContent.toLowerCase();
            }
        } 
    }
};

//Функция добавления контента
const toAddText = (context = '') => {
    display.innerHTML += context + cursor;
};

//Функция удаления последнего символа
const toDel = (dir = '') => {
    if (!dir) {
        display.innerText = display.innerText.slice(0, -1);
    }   
};

//Прослушка всех кнопок
button.forEach (item => {
    item.addEventListener('click', () => {

        //Если это вспомогательные кнопки
        if (item.classList.contains('support')) {
            //Если это кнопка шифт
            if (shiftButton.classList.contains('js-shift')) {
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
        } else {
            //Индикация активности шифта
            if (shiftButton.classList.contains('active') && capsButton.classList.contains('active')) {
                toDel();
                toAddText(item.textContent);
            }

            if (shiftButton.classList.contains('active') && !capsButton.classList.contains('active')) {
                toDel();
                toAddText(item.textContent);
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

//Активация капслока
capsButton.addEventListener('click', () => {
    if (capsButton.classList.contains('caps')) {
        if (capsButton.classList.contains('active')) {
            toShift('-');
            capsButton.classList.remove('active');
        } else {
            toShift('+');
            capsButton.classList.add('active'); 
        }
    }
});

//Пустой дисплей с текстовым курсором и активным шифтом
display.textContent = cursor; 
toShift('+');