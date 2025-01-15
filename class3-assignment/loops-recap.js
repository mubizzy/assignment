// Initial inventory
let inventory = [
  { name: "Apple", price: 2, quantity: 30 },
  { name: "Banana", price: 1, quantity: 50 },
  { name: "Orange", price: 3, quantity: 20 },
  { name: "Mango", price: 4, quantity: 15 },
];

// Step 1: Double prices using for loop
for (let i = 0; i < inventory.length; i++) {
  inventory[i].price *= 2;
}
console.log("After  Double prices using for loop:", inventory);

// Step 2: Reduce quantity using while loop
let i = 0;
while (i < inventory.length) {
  if (inventory[i].quantity > 5) {
    inventory[i].quantity -= 5;
  }
  i++;
}
console.log("After Reduce quantity using while loop:", inventory);

// Step 3: Find items under price 5 using for...of
let cheapItems = [];
for (const item of inventory) {
  if (item.price < 5) {
    cheapItems.push(item);
  }
}
console.log("After Finding items under price 5 using for...of:", cheapItems);

// Step 4: Count total items using for...in
let totalQuantity = 0;
for (const index in inventory) {
  totalQuantity += inventory[index].quantity;
}
console.log(
  "After Count total items using for...in:\nTotal Items:",
  totalQuantity,
);

// Step 5: Recreate inventory with markup using for loop
let newInventory = [];
for (let i = 0; i < inventory.length; i++) {
  newInventory.push({
    name: `${inventory[i].name} (New)`,
    price: inventory[i].price * 1.1,
    quantity: inventory[i].quantity,
  });
}
console.log(
  "After Recreating inventory with markup using for loop:",
  newInventory,
);
