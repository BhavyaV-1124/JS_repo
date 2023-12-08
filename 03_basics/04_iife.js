 // Immediately Invoked Funciton Expressions (IIFE)

 (function chai(){
    console.log(`DB connected.`);           // named IIFE
 })();

 (  (name) => {
    console.log(`DB Two connected to ${name}`);     // Unnamed IIFE
 })('fruitsDB')