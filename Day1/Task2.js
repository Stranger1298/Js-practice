// Write a JavaScript program to find the most frequent item of an array.

// Sample array : [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
// Sample Output : a ( 5 times )

// solve it using javascript

const arr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let obj={};
let count=0;
let max=0;
let mostoccurenceelement=0;
arr.forEach(element => {
    if (obj[element] === undefined) {
        obj[element] = 1;
    } else {
        obj[element]++;
    }
    if (obj[element] > max) {
        max = obj[element];
        mostoccurenceelement = element;
    }
});
console.log(mostoccurenceelement+" occurs "+max+" times");

