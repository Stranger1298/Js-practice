// Write a JavaScript function to remove a specific element from an array.

// Sample array : [2, 5, 9, 6]
// remove : 5

// Expected Output : [2, 9, 6]

const arr=[2, 5, 9, 6];
let item=5;
function remove(arr,item){
    let i=arr.indexOf(item);
    if (i>-1) {
        arr.splice(i,1);
    }
   console.log(arr);
}
remove(arr,item);