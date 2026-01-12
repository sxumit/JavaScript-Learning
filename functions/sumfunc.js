//type 1
function add(a, b) {
    console.log("The sum of a and b is: ", a + b);
}
add(45, 65);






//type 2, printing using the return keyword
function addition(a, b) {
    return a + b
}

result = addition(4, 6)
console.log("The result of addition is: ",result)




// using the default value parameter, this parameter is used when the user explicitly doesnt give value
function sum(a, b, c= 8) {
    return a + b
}

result = sum(56, 6);
console.log("The result of sum is: ",result);