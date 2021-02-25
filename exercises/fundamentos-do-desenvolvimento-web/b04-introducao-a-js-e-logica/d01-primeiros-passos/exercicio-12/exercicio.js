let costPrice = 150.00;
let salePrice = 200.00;

function profit(costPrice, salePrice, saleQuantity = 1000, taxPercentage = 20) {

  if (costPrice === 0 && salePrice === 0 && saleQuantity === 0 && taxPercentage === 0) {
    console.log('Preencha os dados corretamente, nenhum dos valores pode ser 0');
    return false;
  }

  let totalCostPrice = costPrice * (taxPercentage / 100) + costPrice;
  let profit = salePrice - totalCostPrice;

  return profit * saleQuantity;
}

console.log(profit(costPrice, salePrice));
