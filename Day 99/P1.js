//Write a JavaScript function to check whether an 'input' is a string or not.
let str="1234"
function checkforString(str){
    if(typeof(str)==='string'){
        return true
    }
    else{
        return false
    }
}
console.log(checkforString(str))
