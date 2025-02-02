// Task 1: If Statements - Scenario: Customer Discounts
let purchaseAmount = 150; //purchase amount
let finalAmount = purchaseAmount; //amount after discount
if (purchaseAmount > 100) {
    finalAmount = purchaseAmount *0.9; //10% discount
    console.log(`Final amount after discount: $${finalAmount}`); //print using template literal
};