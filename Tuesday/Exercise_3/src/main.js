const orders = require("./data");

const {
  totalRevenue,
  revenueByCustomer,
  topCustomer,
  uniqueSkusSold,
  averageOrderValue,
} = require("./analytics");



console.log(totalRevenue(orders));

console.log(revenueByCustomer(orders));

console.log(topCustomer(orders));

console.log(uniqueSkusSold(orders));

console.log(averageOrderValue(orders, "delivered"));