// only display all electronics

const products = [
  {name: "Microwave", price: 343.99, category: "electronics"},
  {name: "Refrigerator", price: 2359.99, category: "electronics"},
  {name: "Table", price: 123.99, category: "furniture"},
  {name: "Cup", price: 5.99, category: "fragile"},
  {name: "Table Cloth", price: 30.99, category: "furniture"},
];

const electronicsPrices = products
  .filter(({category}) => category === "furniture" && "electronics")
  .map(({price}) => price);

console.log(electronicsPrices);
  
// filter method here
// map method here

// log to the console the prices of the category "Electronics"
