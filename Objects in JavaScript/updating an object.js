// Updating an object
/* This is similar to an array because an array is an object as well, but for properties, we have two options: */
let dog={
    dogname:"doggie",
    weight:"3.5kg",
    color:"Gold", 
    breed:"Gloden Retriver",   // In between the curly braces we see a bunch of properties and their values.
    age:2,
    burglarBiter:false
}

dog["color"] ="white & gold";
dog.weight="3.7kg";

console.log(dog);