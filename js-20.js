//20. Дан массив с числами [5,-3, 6,-5, 0,-7, 8, 9]. Посчитайте количество отрицательных чисел в этом массиве.
let arr = [5,-3, 6,-5, 0,-7, 8, 9];
function negativeLength(number){
    if( number < 0){
        return number;
    }
}
let arr2 = arr.filter(negativeLength);
console.log(arr2.length);