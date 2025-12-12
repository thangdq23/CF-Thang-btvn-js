const orders = [
  {
    id: 1,
    items: [
      { product: "A", qty: 2, price: 100 },
      { product: "B", qty: 1, price: 200 },
    ],
  },
  {
    id: 2,
    items: [
      { product: "A", qty: 1, price: 100 },
      { product: "C", qty: 4, price: 50 },
    ],
  },
];

const revenue = orders
  .flatMap((order) => order.items)
  .reduce((acc, item) => {
    acc[item.product] = (acc[item.product] || 0) + item.qty * item.price;
    return acc;
  }, {});

console.log(revenue);
