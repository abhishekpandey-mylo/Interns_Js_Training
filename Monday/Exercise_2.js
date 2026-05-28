const products = [
  { id: 1, name: "Keyboard", price: 1500, tags: ["electronics", "accessory"] },
  { id: 2, name: "Mouse", price: 800, tags: ["electronics", "accessory"] },
  { id: 3, name: "Notebook", price: 120, tags: ["stationery"] },
  { id: 4, name: "Pen", price: 25, tags: ["stationery"] },
];

// 1. clone(obj) -> shallow copy
const clone = (obj) => ({ ...obj });

// 2. merge(a, b) -> b's keys win
const merge = (a, b) => ({ ...a, ...b });

// 3. pick(obj, keys) -> return new object with only those keys
const pick = (obj, keys) =>
  Object.fromEntries(
    Object.entries(obj).filter(([k]) => keys.includes(k))
  );

// 4. addTag(product, t) -> return new product with tag appended
const addTag = (product, t) => ({
  ...product,
  tags: [...product.tags, t],
});


// Example Outputs
console.log(clone(products[0]));

// console.log(merge({ a: 1, b: 2 }, { b: 9, c: 3 }));

// console.log(pick(products[0], ["name", "price"]));

// console.log(addTag(products[2], "premium"));

