//"Task 1 - Customer Profile."

let customer = {
    name: "Nick Lapasta",
    age: 35,
    email: "Lapasta@gmail.com"
};

console.log("Customer Database:", customer);

// "Task 2 - Order Details.""

let order = {
    orderID: 12345, totalAmount: 150, status: "Processing",
    displayOrder: function(){
        console.log(`Order ID: ${this.orderID}`);
        console.log(`Total amount: $${this.totalAmount}`);
        console.log(`Status: ${this.status}`);
    }
};
order.displayOrder();

//Task 3 - Shopping Cart.
let cartItems = ["apple","banana","chocolate"];
cartItems.push("Trix");
console.log(cartItems); // each console log is to show that i removed or added an item depending on the function 
cartItems.pop();
console.log(cartItems); // same goes here pretty much to give a more valid idea
cartItems.unshift("Pop tarts");
cartItems.shift();
console.log("Final list of the Cart Items:", cartItems);

// Task 4 - Price Adjustments.
let prices = [100,200,300];
let prices_discounted = prices.map(price => price * 0.9); // get the final discounted prices of all products 
console.log("Final Discounted Prices: ", prices_discounted);

//Task 5 - Product Availability."
let inventory = [10, 0 , 14 ,16, 18];
let availability = inventory.filter (quantity => quantity > 0); // filter out the numbers to make sure it is greater than 0
console.log (availability);

// Task 6 - Revenue Calculation
let sales = [500, 300, 200, 400];
let totalRevenue = sales.reduce((sum, price) => sum + price, 0); // reduce function to calculate total revenue 
console.log("Total revenue amounted:", totalRevenue);

//Task 7 - Customer Search.
let customers = ["Alice", "Bob", "Charlie", "David"];
let findcustomer = customers.find(customer => customer === "Charlie");
console.log(findcustomer);

//Task 8 - Tax Calculation
function calculateSalesTax(price, taxrate){
    return price * taxrate;
}
let price = 300;
let taxrate = 0.10; // 10 percent tax

let taxamount = calculateSalesTax(price,taxrate);
console.log (`Tax calculation: $${taxamount}`); // simply just shows the discount 
console.log ("Price after tax:" , price - taxamount); // show the actual price after tax 

//Task 9 function expression

function applydiscount (price, discount){
    return price * discount;
}
console.log (`Discounted price: $${applydiscount(800,0.7)}`);
// Task 10 arrow function
const calculatePoints = (amountpurchased) => {
    return amountpurchased / 10;
} // to return each time 10 dollars has been spent on points 

let points = calculatePoints(200);
console.log("Earned Points:" + points);
