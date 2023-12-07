// Write a JavaScript function to merge two arrays and removes all duplicated elements.

// Sample array : 
// array1 = [1, 2, 3]
// array2 = [2, 30, 1]

// Expected Output : [3, 2, 30, 1]

const arr1=[1, 2, 3];
const arr2=[2, 30, 1];
let arr3=[];
function mergearray(arr1,arr2){
   arr1.forEach(i => {
    if (arr3[i]==undefined) {
        arr3.push(i);
    }
       });

    arr2.forEach(j => {
        if(arr3.includes(j))
            return arr3;
        else{
            arr3.push(j);
        } 
   });

   
   console.log(arr3);
}
mergearray(arr1,arr2);