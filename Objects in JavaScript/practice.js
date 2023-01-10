/* 1. Create a new myCar object for a car. Add some properties, including, but not
limited to, make and model, and values for a typical car or your car. Feel free
to use booleans, strings, or numbers.
 */

let myCar={
    carName:"Toyota Supra",
    color:"Red",
    model:"MKIV",
    horse_power:"321 hp",
    price:"$40,000",
    engine:"3.0L Sequntial Turbo Straight Six",
    top_speed:"177mph",
    can_drift:true
}
console.log(myCar);
/* 2. Create a variable that can hold the string value color. This variable
containing a string value color can now be used to reference the property
name within myCar. Then, use the variable within the square bracket notation
to assign a new value to the color property in myCar. */

let propColor="color";
myCar[propColor]="Black"

/* 3. Use that same variable and assign a new property string value to it, such as
forSale. Use the bracket notation once again to assign a new value to the
forSale property to indicate whether the car is available for purchase. */

propColor="sale";
myCar[propColor]=true;
console.log(myCar);

/* 4. Output engine and model into the console */

console.log(myCar.engine+" "+myCar.model);