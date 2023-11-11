// Write your solution in this file!
var customerName = 'bob';

console.log(customerName);

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}
console.log(upperCaseCustomerName);

function setBestCustomer() {
    bestCustomer = 'not bob';
}
function overwriteBestCustomer(newFavorite) {
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'me';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'me';
}