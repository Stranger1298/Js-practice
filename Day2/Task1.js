// There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays. 

// Sample array : 
// array1 = [1,0,2,3,4]
// array2 = [3,5,6,7,8,13]

// Expected Output : [4, 5, 8, 10, 12, 13]

const arr1=[1,0,2,3,4];
const arr2=[3,5,6,7,8,13];
let sum=[];
function addarray(arr1,arr2){
    for (let i = 0; i < arr1.length; i++) {
        const val1 = arr1[i] || 0;
        const val2 = arr2[i] || 0;
        sum.push(val1+val2);
    }
    console.log(sum);
}
addarray(arr1,arr2);