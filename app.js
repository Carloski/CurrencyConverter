const currencyElement_one = document.getElementById('currency-one');
const currencyElement_two = document.getElementById('currency-two');
const amountElement_one = document.getElementById('amount-one');
const amountElement_two = document.getElementById('amount-two');

const rateElement = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch Exchange Rates and Update the DOM
function calculate() {
  const currency_one = currencyElement_one.value;
  const currency_two = currencyElement_two.value;
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  let url = `https://api.exchangeratesapi.io/latest?base=${currency_one}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch(() => console.log("can't access response. Blocked by browser?"));
}

// Event Listeners
currencyElement_one.addEventListener('change', calculate);
amountElement_one.addEventListener('input', calculate);
currencyElement_two.addEventListener('change', calculate);
amountElement_two.addEventListener('input', calculate);

calculate();
