//Write a JavaScript function to split a string and convert it into an array of words.
let str="123455"
let arr=[]
function stringtoArr(str,arr){
    for (let i = 0; i < str.length; i++) {
        arr.push(str[i])
        
    }
    return arr;
}
console.log(stringtoArr(str,arr))