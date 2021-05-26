//14. Дан массив с числами [5, 6, 7, 8, 9]. Найдите сумму этих чисел.
let arr = [5,6,7,8,9];
let sum = null;
arr.forEach(function(number){
    sum += number;
})
console.log(sum);