var sms = prompt("Введи предложение");

sms = pigIt(sms);
alert(sms);

//задача функции в том, чтобы взять слово, первую его букву переместить в конец, и еще 
// к концу слова добавить "ау", или можно добвать что-то инное

function pigIt(str){
    //создаем массив для того чтобы в него засунуть слова
    var arrStr = [];
    //разрезаем строку по пробелам и суем в массив
    arrStr = str.split(" ") ;
    //проходим по каждому эллементу массива и делаем изменения
    for(var i = 0; i < arrStr.length; i++){
        //если слово больше одного символа (тоесть это не знаки припенания
        //или одна буква, так как там менять нечего, пропускаем) то выполнять процесс преобазования слов
        if(arrStr[i].length !== 1){
        //временная переменная хранит в себе все слово кроме первой буквы, отскли все методом .slice
        var tmp = arrStr[i].slice(1);
        //теперь добавили в конец слова первую букву
        tmp += arrStr[i].slice(0, 1);
        //заменили слово в массиве прибавив к нему последнюю часть
        arrStr[i] = tmp + "ay";
        } 
    }
    //возвращаем строку , в которой слова соедененны пробелами
     return arrStr.join(" ");
}