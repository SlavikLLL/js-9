//12. Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
let arr = [1,2,3,4,5];
arr.splice(1,0,'a', 'b',);
arr.splice(7,0,'e');
arr.splice(-2,0,'c');
console.log(arr);