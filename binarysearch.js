let arr = [2, 4, 6, 8, 10, 12, 14];
let find = 3;
let first = 0;
let last = arr.length - 1;

function binary(arr, first, last, find) {
    if (first <= last) {
        
        let mid = math.floor((first + last) / 2);
    
        if (arr[mid] == find) 
            return `${arr[mid]}is at index ${mid}`;
        
        if (arr[mid] > find) 
            return binary(arr, first, mid - 1, find);
        
        else 
            return binary(arr, mid + 1, last, first);
        
    }

}

let result = binary(arr, first, last, find);
console.log(result);