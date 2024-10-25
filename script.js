document.addEventListener('DOMContentLoaded', () => {
    let totalPrice = 0;

    // Get total price element
    const totalPriceElement = document.getElementById('total-price');

    // Get all product elements using getElementsByTagName
    const products = document.getElementsByTagName('div');

    // Loop through product elements to add event listeners
    for (let i = 0; i < products.length; i++) {
        if (products[i].classList.contains('product')) {
            const addButton = products[i].getElementsByClassName('add-to-cart')[0];

            addButton.addEventListener('click', () => {
                const price = parseFloat(products[i].getElementsByClassName('product-price')[0].dataset.price);
                totalPrice += price;
                totalPriceElement.textContent = totalPrice.toFixed(2);
            });
        }
    }

    // Clear Cart button functionality
    document.getElementById('clear-cart').addEventListener('click', () => {
        totalPrice = 0;
        totalPriceElement.textContent = totalPrice.toFixed(2);
    });
});
