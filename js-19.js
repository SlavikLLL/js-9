//19. Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только подмассивы.
let arr =  [1, 2, [3, 4], 5, [6, 7]];
function array(arr){
    return Array.isArray(arr);
}
console.log(arr.filter(array));