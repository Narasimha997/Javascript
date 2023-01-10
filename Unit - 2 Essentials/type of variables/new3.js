let strtoBool="false"
strtoBool=Boolean(strtoBool)
console.log(strtoBool,typeof strtoBool)
let strtoBool1=""
strtoBool1=Boolean(strtoBool1)
console.log(strtoBool1,typeof strtoBool1);
/* output shows that any string will return true when converted to a Boolean,
even the string "false"! Only an empty string, null, and undefined will lead to a
Boolean value of false.*/
