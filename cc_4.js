// Task 1: If Statements - Scenario: Customer Discounts
let purchaseAmount = 150; //purchase amount
let finalAmount = purchaseAmount; //amount after discount
if (purchaseAmount > 100) {
    finalAmount = purchaseAmount *0.9; //10% discount
    console.log(`Final amount after discount: $${finalAmount}`); //print using template literal
};

//Task 2: For Loop - Scenario: Sales Report
let sales = [120, 85, 200, 150,90]; //array of sales
let totalSales = 0; 
for (let i = 0; i < sales.length; i++){
    totalSales += sales[i]
}
console.log(`Total Sales: $${totalSales}`); //template literal

//Task 3: While Loop - Scenario: Inventory Depletion
let stock = 10; //current stock
while (stock > 0 ) {
    console.log(`Stock remaining: ${stock}`);
    stock--; //decreases by 1 until 0
}
console.log("Stock has reached 0");

//Task 4: Do... While Loop - Scenario: Customer Survey
let responses = 0;
do {
    console.log(`Collecting responses: ${responses}`);
    responses++;
} while (responses <=3); //until reaches 3

//Task 5: For... In Loop - Scenario : Employee Information
let employee = {     //declaring object employee
    name: "Alice",
    position: "Manager",
    salary: 75000
}; //object employee
for (let key in employee) {              // the loop variable represents for each key... name is a key and alice 
// is value for it. keys are like the labels for the properties of an object
  console.log(`${key}: ${employee[key]}`);

}

//Task 6: For... Of Loop - Scenario: Product Listings
let products = ["Laptop", "Mouse", "Keyboard"]; //list of products
for (let product of products) {
    console.log(`Product: ${product}`);
}