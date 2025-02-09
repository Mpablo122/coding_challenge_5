//"Task 1 - Customer Profile."

let customer = {
    name: "Nick Lapasta",
    age: 35,
    email: "Lapasta@gmail.com"
};

console.log("Customer Database:", customer)

// "Task 2 - Order Details.""

let order = {
    orderID: 12345, totalAmount: 150, status: "Processing",
    displayOrder: function(){
        console.log(`Order ID: ${this.orderID}`);
        console.log(`Total amount: $${this.totalAmount}`);
        console.log(`Status: ${this.status}`);
    }
};
order.displayOrder()

//Task 3 - Shopping Cart.
let cartItems = ["apple","banana","chocolate"];
cartItems.push("Trix");
console.log(cartItems);
cartItems.pop();
console.log(cartItems);
cartItems.unshift("Pop tarts");
cartItems.shift();
console.log("Final list of the Cart Items:", cartItems);

// Task 4 - Price Adjustments.