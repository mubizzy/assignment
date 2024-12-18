//*********************** Circle Area Calculation Task*************************//
function calculateArea(radius: number): number {
  const area: number = Math.PI * Math.pow(radius, 2);
  console.log(`Area of the circle: ${area.toFixed(2)}`);
  return area;
}
// Example usage
calculateArea(5); // Outputs area calculation for radius 5

//********************* Discounted Price Calculation Task********************************//
function calculateDiscountedPrice(
  price: number,
  discount: number = 10,
): number {
  const discountedPrice: number = price * (1 - discount / 100);
  console.log(`Original Price: $${price}`);
  console.log(`Discounted Price: $${discountedPrice.toFixed(2)}`);
  return discountedPrice;
}
// Example usage
calculateDiscountedPrice(100); // Uses default 10% discount
calculateDiscountedPrice(100, 20); // Uses 20% discount
