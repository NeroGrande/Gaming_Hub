let cart = [];

function addToCart(id, name, price) {
    const product = { id, name, price };
    cart.push(product);
    updateCartCount();
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}
