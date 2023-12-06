// Write a JavaScript program to find the most frequent item of an array.

// Sample array : [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
// Sample Output : a ( 5 times )

// solve it using javascript

const arr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let sum=0;
console.log(arr.map(findoccurence));
function findoccurence(n){
    if(arr[n]==arr[n+1]){
        return sum+=1;
    }
    n++
}
