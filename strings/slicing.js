let a = "helloworld"
// b = a.slice(0,4)
// console.log(b)
console.log(a.slice(1,5))
console.log(a.slice(3)) // this will print all the characters syarting from index 3


// REPLACING THE CHARACTERS
let b = "abrakadabra"
console.log(b.replace("dabra", "bhangra"))
//remember , if there are 2 occurences then only the first occurence will be replaced
// if 'dabra' comes twice in out string, only first will be replaced

let c = "Inter"
let d = "stellar"
console.log(c.concat(d))
console.log(c.concat(d, " by Christopher Nolan")) 

//strings are immutable, we are making new strings, not changing the existing string

console.log(c.charAt(1)) // returns the character at index
console.log(c.indexOf("te")) // returns the index at which the "te" is present