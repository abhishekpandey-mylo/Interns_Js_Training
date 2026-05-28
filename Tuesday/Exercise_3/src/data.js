const orders = [
  {
    id: "o1",
    customer: "Aarav",
    items: [
      { sku: "K01", qty: 1, price: 1500 },
      { sku: "M01", qty: 2, price: 800 },
    ],
    status: "delivered",
  },

  {
    id: "o2",
    customer: "Priya",
    items: [
      { sku: "N01", qty: 5, price: 120 },
    ],
    status: "pending",
  },

  {
    id: "o3",
    customer: "Rahul",
    items: [
      { sku: "P01", qty: 3, price: 25 },
      { sku: "K01", qty: 1, price: 1500 },
    ],
    status: "delivered",
  },

  {
    id: "o4",
    customer: "Aarav",
    items: [
      { sku: "M01", qty: 1, price: 800 },
    ],
    status: "cancelled",
  },

  {
    id: "o5",
    customer: "Sneha",
    items: [
      { sku: "N01", qty: 2, price: 120 },
      { sku: "P01", qty: 4, price: 25 },
    ],
    status: "delivered",
  },
];

module.exports = orders;