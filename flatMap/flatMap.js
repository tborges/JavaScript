const orders = [
    {
        orderId: 234,
        items:[
            {name: "soap", price: 1.99},
            {name: "shampoo", price: 4.99}
        ],
    },
    {
        orderId: 9210,
        items:[
            {name: "toothpaste", price: 3.50},
            {name: "bread", price: 8.99}
        ]
    }
];

const items = orders.flatMap(i => i.items.map(i => i.name));
document.getElementById("flatMap").innerHTML = items;