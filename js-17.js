//17. Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только четные числа.
let arr = [1,-3, 5, 6,-7, 8, 9,-11];
function even(number){
    if(number % 2 == 0 ){
        return number;
    }
}
console.log(arr.filter(even));