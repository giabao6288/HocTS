function greet(name: string = "Guest") {
    console.log(`Hello, ${name}!`);
}
greet();
greet("Alice");

interface AddToCartPara {
    product: string;
    price: number;
    quantity?: number;
    currency?: string;
}
function addtoCart({ product, price, quantity = 2, currency = "VND" }: AddToCartPara) {
    console.log(product, price, quantity, currency);
}
addtoCart({ product: 'Mango', price: 200, quantity: 10, currency: "USD" });
addtoCart({ product: 'Buoi', price: 20 });

let Bicycle = {
    product: 'Bicycle',
    price: 100
}

let Helmet = {
    product: 'Helmet',
    price: 150
}

let Bell={
    product:'Bell',
    price: 220
}

Array(Bicycle,Helmet,Bell).forEach(product=>{
    let cartParams: AddToCartPara = Object.create(product);
    cartParams.currency = "CAD";
    addtoCart(cartParams);
});

