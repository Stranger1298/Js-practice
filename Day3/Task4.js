// Write a JavaScript program to delete the rollno property from the following object. Also, print the object before or after deleting the property. 

// Sample object:
// student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 
// };

// resource-https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values

const student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
    };

console.log("Object before:-");
console.log(student);


console.log("Object after:-");
delete student.rollno;
console.log(student);