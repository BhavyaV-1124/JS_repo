let a = 10;
const b = 20;
var c = 30;


// console.log(a);
// console.log(b);
// console.log(c);

// Function scope

function one(){
    const username = "Bhavya"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two();
}

// one();

// 

if(true){
    const username = "Bhavya";
    if(username === "Bhavya"){
        const website =" youtube";
        // console.log(username + website);
    }

}


// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& Intresting &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

function addOne(num){
    return num +1;
}                                       // taken as function

console.log(addOne(5));


const addTwo = function(num){
    return num + 2;
}

console.log(addTwo(4));                 // talken as expression

// So the point is if you hoist function as a expression before the function it will give error.