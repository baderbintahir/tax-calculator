document.querySelector('input[type="text"]').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const amountOfPurchase = parseFloat(document.querySelector('input[type="text"]').value)
        const stateTax = amountOfPurchase * 0.04;
        const countryTax = amountOfPurchase * 0.02;
        const totalTax = countryTax + stateTax;
        const totalBill = amountOfPurchase + totalTax;

        document.querySelector('.purchase-amount').textContent = amountOfPurchase.toFixed(2)
        document.querySelector('.state-tax').textContent = stateTax.toFixed(2)
        document.querySelector('.country-tax').textContent = countryTax.toFixed(2)
        document.querySelector('.total-tax').textContent = totalTax.toFixed(2)
        document.querySelector('.total-bill').textContent = totalBill.toFixed(2)
        document.querySelector('input[type="text"]').value = ""
    }
})






