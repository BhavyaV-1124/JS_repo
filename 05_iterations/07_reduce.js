

const array1 = [1,2,3,4];

const initialValue = 0;

const sumWithInitial = array1.reduce((acc, currval)=>{
    return acc +currval ;
},0)

console.log(sumWithInitial);


const shoppingCart = [
    {
        itemName: "js course",
        price: 299
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 1299
    }
];

const finalTotal = shoppingCart.reduce((acc, item) => acc + item.price,0);

console.log(finalTotal);