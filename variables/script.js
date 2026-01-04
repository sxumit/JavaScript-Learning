console.log("Hey this is website of JS Variables")

//how to define a variable

var a = 5;
var b = 7;
console.log("The sum of a and b is: " + (a + b));
console.log(a + b + 3);

var c = "Sumit"; // variable c contains string datatype
console.log(c);

//function to find the datatype of a variable
console.log(typeof a, typeof b, typeof c);

// Rules for chosing variable name: 
//     1. underscore, dollar and digits are allowed
//     2. variable must begin with letter, $ or underscore only
//     _a is valid but 34a is invalid
//     3. case sensitive sumit and Sumit are different variables <br>
//     4. Let and var works same to define a variable but var is global and let is blocked scopee 
//     5. const a1 = 6 
//     a1 = a1+1 this is not allowed for constants. no update no re declaration 


let x = 13;
// showing different value because x is defined 78 only inside the block
{
    let x = 78;
    console.log(x);
}
console.log(x);

// PRIMITIVE DATATYPES
// Datatypes: primitive datatype and object
// primitive: null, number, string, boolean, undefined, bigint and symbol
//DataTYPE OF NULL IS OBJECT. WHY? IT WAS WRITTEN LONG AGO, SCIENTIST NOW FIND IT AS A MISTAKE 
// BUT CANT CHANGE CUZ TOO MANY CODES RELY ON NULL ALREADY     
let p = "hello Sumit";
let q = 3.14;
let r = null;
const s = true;
let t = undefined;
console.log(p, q, r, s, t);
console.log(typeof p, typeof q, typeof r, typeof s, typeof t);

//object
// Object:  is a set of key value pairs
let o = {
    name: "Sumit",
    age: 20,
    "full name": "Sumit Maurya" //need to enclose  in inverted commas when there is space

}
console.log(o);
// to add  a key value pair
o.branch = "Data Science";
console.log(o);
