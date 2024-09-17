// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
// 'func(" hello world", ['l', 'd'])' 
// поверне нам "heo wor". 
// Вихідний рядок та символи для видалення задає користувач.

// у функції створити пусту змінну
// циклом пройти по всім елементам рядка
// Якщо поточний символ відсутній в масиві символів lettersToRemove - додаємо його до змінної яку створили раніше через 
// resultStr += text[i]

function removeLetters(text, lettersToRemove){
   let resultStr = '';

   for(let i = 0; i<text.length; i++){
       if(!lettersToRemove.includes(text[i])){
           resultStr+=text[i];
       }
   }
   return resultStr;
}

userText = prompt(`Hi! Enter your text, please:`);
userLettersToRemove = prompt(`Enter letters you'd like to remove from your text using a space between symbols: `);
userLettersToRemove = userLettersToRemove.split(' ');

let result = removeLetters(userText, userLettersToRemove);
console.log(`Text you entered: ${userText}`);
console.log(`Letters you want to remove: ${userLettersToRemove}`);
console.log(`New text: ${result}`);



// ----------------------------------------------------
// function removeLetters(text, lettersToRemove){
//    let resultStr = text;
//    for (let i = 0; i < lettersToRemove.length; i++){
//     let letter = lettersToRemove[i];
//     resultStr = resultStr.split(letter).join('');
//    }
//    return resultStr;
// }

// result = removeLetters("hello world", ['l', 'd']);
// console.log(result);

