const  fs= require('fs');

fs.readFile('notes.txt', 'utf8',(err,data)=>{ // reads a file, returns the error if any error is caused
    console.log(err, data)
})

const a= fs.readFileSync('notes.txt')
console.log(a.toString())

// write file function
//this function creates a new file and write the contents in it
fs.writeFile('file.txt', "this is a writefile func", () =>{
    console.log("written successfully")
})