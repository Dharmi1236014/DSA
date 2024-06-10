let arr =[1,2,3,4,5,6,7];
let element = 3;

function demo(){
    for(let i=0;i<arr.length;i++){
        if (arr[i]==element) {
            return"true";
             }
             else{
                console.log(arr[i]);
             }
    }
}
console.log(demo());