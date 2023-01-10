// Objects can contain more than one value
let arr=[0,1,2]
console.log(typeof arr);
// Output : object
// An object is a chance to group multiple variables into one.
// This is done with curly brackets: { and }.
let dog={
    dogname:"doggie",
    weight:"3.5kg",
    color:"Gold", 
    breed:"Gloden Retriver",    // In between the curly braces we see a bunch of properties and their values.
    age:2,
    burglarBiter:false
}
console.log(dog);
// In arrays we can access elements by using it's index number 
/* We can access the properties of this object in a very similar way as we would
with the array. This time, we are not using the index number, but the name of the
property, to get the value */
let dogcolor1=dog["color"];
console.log(dogcolor1);
/* There is another way to do this. Instead of the square brackets, the property name
can also be added to the object name with a dot in between: */
let dogcolor2=dog.color;
console.log(dogcolor2);