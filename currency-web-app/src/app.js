const pricesInUSD = {
  item1: 20.00,
  item2: 15.50,
  item3: 30.00,
};

const conversionRates = {
  USD: 1,
  INR: 74.85, // Example conversion rate
};

const currencyDropdown = document.getElementById('currency-dropdown');
const priceElements = document.querySelectorAll('.price');

function updatePrices() {
  const selectedCurrency = currencyDropdown.value;
  const conversionRate = conversionRates[selectedCurrency];

  priceElements.forEach((priceElement) => {
    const itemKey = priceElement.getAttribute('data-item');
    const priceInUSD = pricesInUSD[itemKey];
    const convertedPrice = (priceInUSD * conversionRate).toFixed(2);
    priceElement.textContent = `${convertedPrice} ${selectedCurrency}`;
  });
}

currencyDropdown.addEventListener('change', updatePrices);

// Initial price display
updatePrices();