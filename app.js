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
  let url = `https://api.exchangerate-api.com/v4/latest/${currency_one}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      const rate = data.rates[currency_two].toFixed(2);

      rateElement.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

      amountElement_two.value = (amountElement_one.value * rate).toFixed(2);
    });
}

// Event Listeners
currencyElement_one.addEventListener('change', calculate);
amountElement_one.addEventListener('input', calculate);
currencyElement_two.addEventListener('change', calculate);
amountElement_two.addEventListener('input', calculate);

// event listener to swap currencies when the swap button is pressed
swap.addEventListener('click', (e) => {
  const temp = currencyElement_one.value;
  currencyElement_one.value = currencyElement_two.value;
  currencyElement_two.value = temp;
  calculate();
});

calculate();
