// Write a JavaScript program that accepts a number as input and inserts dashes (-) between every two even numbers. For example,

// if you accept 025468 the output should be 0-254-6-8.


let n="025468";
let map=n.split("");
function add_dash(map){
    map.forEach(element => {
        if (element%2!=0) {
            map.shift(element);
        }
        // else{
        //     map.push("-");
        // };
    });
    console.log(map);
}
add_dash(map);