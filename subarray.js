
let arr = [1, 2, 3, 4];

function countSubarrays(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            count++;

        }

    }
    return count;
}


console.log(countSubarrays(arr));


