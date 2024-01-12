const apiKey = '6a5c74f5b92e17cf61f7aafd';
const apiEndpoint = 'https://open.er-api.com/v6/latest';
const url = `${apiEndpoint}?apikey=${apiKey}`

async function fetchCurrencies() {
    // your code goes here
}  

function convert() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const fromCurrencyDropdown = document.getElementById('fromCurrency');
    const toCurrencyDropdown = document.getElementById('toCurrency');
    let convertedAmount;
    // your code goes here
    document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
}  