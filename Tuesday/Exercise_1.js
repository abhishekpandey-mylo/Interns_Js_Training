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


// Helper Function
const getOrderTotal = (order) => {
  return order.items.reduce((total, item) => {
    return total + item.qty * item.price;
  }, 0);
};


//  Total Revenue
const totalRevenue = (orders) => {
  const deliveredOrders = orders.filter(
    (order) => order.status === "delivered"
  );

  return deliveredOrders.reduce((total, order) => {
    return total + getOrderTotal(order);
  }, 0);
};


//  Revenue By Customer
const revenueByCustomer = (orders) => {
  const result = {};

  orders
    .filter((order) => order.status === "delivered")
    .forEach((order) => {
      const total = getOrderTotal(order);

      if (result[order.customer]) {
        result[order.customer] += total;
      } else {
        result[order.customer] = total;
      }
    });

  return result;
};


//  Top Customer
const topCustomer = (orders) => {
  const revenue = revenueByCustomer(orders);

  let topName = "";
  let maxAmount = 0;

  for (const customer in revenue) {
    if (revenue[customer] > maxAmount) {
      maxAmount = revenue[customer];
      topName = customer;
    }
  }

  return topName;
};


// Unique SKUs Sold
const uniqueSkusSold = (orders) => {
  const skus = new Set();

  orders
    .filter((order) => order.status === "delivered")
    .forEach((order) => {
      order.items.forEach((item) => {
        skus.add(item.sku);
      });
    });

  return skus;
};


// Average Order Value
const averageOrderValue = (orders, status) => {
  const filteredOrders = orders.filter(
    (order) => order.status === status
  );

  const total = filteredOrders.reduce((sum, order) => {
    return sum + getOrderTotal(order);
  }, 0);

  return total / filteredOrders.length;
};



// Outputs
console.log(totalRevenue(orders));

console.log(revenueByCustomer(orders));

console.log(topCustomer(orders));

console.log(uniqueSkusSold(orders));

console.log(averageOrderValue(orders, "delivered"));