// here func 1 is a variable whic is a function 
 
const func1 = (x) => {
    console.log("This is arrow function ", x)
}
func1(4);



// the output of arrow function can be passed in other function 

const func2= (a, b) => {
    return (a+b)
}
let result = func2(8,3);
console.log(result)
// now using the return value of func2 in another function

function age(result) {
    if (result> 20){
        console.log("wow")
    }
    else{
        console.log("shutup")
    }

}
age(result);