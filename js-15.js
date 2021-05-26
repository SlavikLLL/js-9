//15. Дан массив с числами [5, 6, 7, 8, 9]. Сделайте из него массив, состоящий из квадратов этих чисел.
let arr = [5,6,7,8,9];
let arr2 = [];
arr.forEach(function(number){
    arr2.push(number*number);
});
console.log(arr2);