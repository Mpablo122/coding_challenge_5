//"Task 1 - Customer Profile."

let customer = {
    name: "Nick Lapasta",
    age: 35,
    email: "Lapasta@gmail.com"
};

console.log("Customer Database:", customer)

// "Task 2 - Order Details.""

let order = {
    orderID: 12345, totalAmount: 150, status: "Processing"
    displayOrder: function(){
        console.log(`Order ID: ${this.orderID}`);
        console.log(`Total amount: $${this.totalAmount}`);
        console.log(`Status: ${this.status}`);
    }
};

