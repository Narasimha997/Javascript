/* It's useful to note that if we change the data type of one of our properties, for example: */
let dog={
    dogname:"doggie",
    weight:"3.5kg",
    color:"Gold", 
    breed:"Gloden Retriver",   // In between the curly braces we see a bunch of properties and their values.
    age:2,
    burglarBiter:false
}
dog["age"]='three';
console.log(dog);
/* Another element to note is that we are now using the literal string values to refer to
the object's properties, but we can also work with variables to achieve this. So, for
example: */
let variable="age"           // Here the variable name is variable we can give any name that you need
console.log(dog[variable]);
/* If we change the value of the variable to another dog property, we will be accessing another property, like this: */
variable="breed";
console.log(dog[variable]);

/* when we update the value accessing this way, it is the exact same as when we would have accessed it with the literal string: */
dog[variable]="huskey"
console.log(dog['breed']);
console.log(dog);
variable="color"
dog[variable]="white & black"
console.log(dog);