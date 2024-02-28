const cart = [
    {productName:"T-shirt", price: 20},
    {productName:"Jeans", price: 50},
    {productName:"Sneakers", price: 80},
    {productName:"Mask", price: 40},
    {productName:"Dress", price: 90},
    {productName:"Swim Suit", price: 100}
];

const calculataTotalPrice = (cart) => {
        let totalPrice = 0;
        for (let item of cart){
            totalPrice = totalPrice + item.price;
           
        }
        console.log(totalPrice);    
    }
    

const totalPrice = calculataTotalPrice(cart);       