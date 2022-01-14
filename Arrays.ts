// working with arrays in real-world life
const costumers = ["Ahmed", "Abdi", "Mariam", "Mahda", "Jasmine", "Ali"];
console.log("My costumer are: ", costumers);
console.table(costumers);

let tempCustomers: string[] = [];
for (const costumer of costumers) {
    if(costumer.length<= 4){
        tempCustomers.push(costumer);
    }
}
console.log("This is: ");
console.table(tempCustomers);


// Array Functions : filter, push
const costumerList = costumers.filter(function(costumer){
    return costumer.length<=4;
});
console.log("The list is: ");
console.table(costumerList);


