// Initial inventory
let inventory = [
  { name: "Apple", price: 2, quantity: 30 },
  { name: "Banana", price: 1, quantity: 50 },
  { name: "Orange", price: 3, quantity: 20 },
];

// 1. Add Mango
inventory.push({ name: "Mango", price: 4, quantity: 15 });
console.log("After adding Mango:", inventory);

// 2. Remove Banana
const bananaIndex = inventory.findIndex((item) => item.name === "Banana");
inventory.splice(bananaIndex, 1);
console.log("After removing Banana:", inventory);

// 3. Update Orange quantity
inventory = inventory.map((item) =>
  item.name === "Orange" ? { ...item, quantity: item.quantity - 10 } : item,
);
console.log("After updating Orange quantity:", inventory);

// 4. Find Apple
const apple = inventory.find((item) => item.name === "Apple");
console.log("Apple details:", apple);

// 5. Filter expensive items
const expensiveItems = inventory.filter((item) => item.price > 2);
console.log("Expensive items:", expensiveItems);

// 6. Calculate total value
const totalValue = inventory.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0,
);
console.log("Total Inventory Value:", totalValue);
