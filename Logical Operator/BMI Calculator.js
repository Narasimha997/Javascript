// BMI calculator
// BMI stands for Body Mass Index
/* Set values for height in inches and weight in pounds, then convert the values to
centimeters and kilos, outputting the results to the console:
• 1 inch is equal to 2.54 cm
• 2.2046 pounds is equal to 1 kilo
Output the results. Then, calculate and log the BMI: this is equal to weight (in kilos)
divided by squared height (in meters). Output the results to the console. */
/* let inch=70
let pound=132.
let height=inch*2.54    // in kilos
let weight=pound/2.2046  //in centimeters
console.log(weight,height);
let bmi=weight/(height/100+height/100);
console.log(bmi); */
let inch=prompt("Enter Your Height in Inches:");
let pound=prompt("Enter your Weight in Pounds:");
let weight=pound/2.2046;
let height=inch*2.54;
console.log("Weight",weight+"k.g's");
console.log("Height:",height+"c.m's");
let BMI=weight/(height/100+height/100);
console.log(BMI);