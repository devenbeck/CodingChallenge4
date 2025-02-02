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
