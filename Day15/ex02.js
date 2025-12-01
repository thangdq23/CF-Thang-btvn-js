[
    { id: 1, name: "A", price: 100, quantity: 2 },
    { id: 2, name: "B", price: 50, quantity: 1 },
];

function addToCart(cart, product) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === product.id) {
            cart[i].quantity++;
            return cart;
        }
    }

    cart.push({
        ...product,
        quantity: 1,
    });

    return cart;
}

function removeFromCart(cart, id) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            if (cart[i].quantity > 1) {
                cart[i].quantity--;
            } else {
                cart.splice(i, 1);
            }
            return cart;
        }
    }
    return cart;
}

function getTotal(cart) {
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
    }

    return total;
}

let cart = [];

addToCart(cart, { id: 1, name: "A", price: 100 });
addToCart(cart, { id: 1, name: "A", price: 100 });
addToCart(cart, { id: 2, name: "B", price: 50 });

console.log(cart);

removeFromCart(cart, 1);
console.log(cart);

console.log(getTotal(cart));
