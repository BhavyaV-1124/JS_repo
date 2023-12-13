const userEmail = "h@bhavya.ai";

// if(userEmail){                             
//     console.log("Got user email");
// }else{
//     console.log("Don't have user email");
// }

 // When you believe that string is true bydefault; if it's empty then we believe it's false by default.

 //Falsy Values:
 //false, 0 , -0, BigInt 0n, "", null, undefined, Nan 

 //truthy values: written in stirings and values not falsy values;
 // "0", "false", " ", [], {}, function(){} 

 // ******************************************************************
 // Nullish Coalescing Operator (??) : null undefined

 let val1;
 val1 = 5??10;
 val1 = null ?? 10;
 val1 = undefined ?? 15;

//  console.log(val1);

 // Terniary Operator

 const iceTeaPrice = 100;
 iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80");