function getTotalPurchasePrice(customers) {
  let totalPurchasePrice = 0;
  customers.forEach((item) => {
    totalPurchasePrice += item;
  });
  return totalPurchasePrice;
}

let valuableCustomers = [10000, 20000, 30000];
console.log(getTotalPurchasePrice(valuableCustomers));
