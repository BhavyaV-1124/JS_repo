// For-Loop

for(let i = 0; i<=10; i++){
    const element = i;
    if(element === 5){
        // console.log("5 is the best number");
    }
    // console.log(element);

}

for(let i=0; i<=10; i++){
    // console.log(`Outer loop value: ${i}`);
    for(let j=0; j<=10; j++){
        // console.log(`Inner loop value ${j} and outerloop value: ${i}`);
    }
}

let myArray = ["flash", "batman", "superman"];

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}

// Break & Continue

// for (let index = 1; index <=20; index++) {
//     if(index === 5){
//         console.log(`Detected 5`);
//         break;
//     }

//     console.log(`Value of i is ${index}`);
    
    
// }

for (let index = 1; index <=20; index++) {
    if(index === 5){
        console.log(`Detected 5`);
        continue;
    }

    console.log(`Value of i is ${index}`);
    
    
}