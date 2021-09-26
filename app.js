const initialPrice = document.querySelector("#initial-price");

const stockQuantity = document.querySelector("#quantity-stock");

const currentPrice = document.querySelector("#current-price");

const btn = document.querySelector("#btn");

const output = document.querySelector(".output");

function calculateProfitLoss(initial, quantity, current) {

  if (initial > current) {
    var lossCalculator = (initial - current) * quantity;
    var lossPercentage = (lossCalculator / initial) * 100;
    output.innerText=(
      `hello the loss is ${lossCalculator} and the percentage is ${lossPercentage}%`
    );
  } 
  else if (current > initial) {
    var profitCalculator = (current - initial) * quantity;
    var profitPercentage = (profitCalculator / initial) * 100;
    output.innerText=(
      `hello the profit is ${profitCalculator} and the percentage is ${profitPercentage}%`
    );
  } 
  
  else {
    output.innerText=("Sab changa Si!");
  }
}

function submitHandler() {
  var initialPriceValue = Number(initialPrice.value);
  var stockQuantityValue = Number(stockQuantity.value);
  var currentPriceValue = Number(currentPrice.value);
  calculateProfitLoss(initialPriceValue,stockQuantityValue,currentPriceValue)
}

btn.addEventListener("click", submitHandler);
