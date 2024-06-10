let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let num = 32;
let sum = arr[0];


for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] + arr[j] == num) {
            console.log(`${arr[i]} + ${arr[i]} = ${num}`);
        }
       
    }
}