let obj = {
    name: "Sumit",
    age: "20",
    city: "Noida"
}
for (const key in obj) {
      const element = obj[key]; 
      console.log(key, element);
}