//17. Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только отрицательные числа.
let arr = [1,-3, 5, 6,-7, 8, 9,-11];
function notPos(number){
    return number < 0;
}

console.log(arr.filter(notPos));