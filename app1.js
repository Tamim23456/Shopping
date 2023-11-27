document.addEventListener('DOMContentLoaded', function () {
    const productList = document.getElementById('productList');
    const cartOverlay = document.getElementById('cartOverlay');
    const closeCartBtn = document.getElementById('closeCartBtn');
    const viewCartBtn = document.getElementById('viewCartBtn');
    const cartItems = document.getElementById('cartItems');

    // Sample product data
    const products = [
        { id: 1, name: 'Product 1', price: 20 },
        { id: 2, name: 'Product 2', price: 300 },
        { id: 3, name: 'Product 3', price: 25 },
    ];

    // Display products
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productElement);
    });

    // Show cart overlay
    viewCartBtn.addEventListener('click', function () {
        cartOverlay.style.display = 'flex';
    });

    // Close cart overlay
    closeCartBtn.addEventListener('click', function () {
        cartOverlay.style.display = 'none';
    });
});

function addToCart(productId) {
    // Add logic to add the selected product to the cart
    // For simplicity, let's just append the product name to the cart for now
    const cartItems = document.getElementById('cartItems');
    const product = document.createElement('li');
    product.textContent = `Product ${productId}`;
    cartItems.appendChild(product);
}
