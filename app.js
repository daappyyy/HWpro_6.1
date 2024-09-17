// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
// 'func(" hello world", ['l', 'd'])' 
// поверне нам "heo wor". 
// Вихідний рядок та символи для видалення задає користувач.

function removeLetters(text, lettersToRemove){
   let resultStr = text;
   for (let i = 0; i < lettersToRemove.length; i++){
    let letter = lettersToRemove[i];
    resultStr = resultStr.split(letter).join('');
   }
   return resultStr;
}

result = removeLetters("hello world", ['l', 'd']);
console.log(result);

