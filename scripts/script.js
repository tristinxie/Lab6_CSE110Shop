// Script.js
const fetchProducts = async () => {
    const products = await fetch('https://fakestoreapi.com/products').then(response => response.json());
    localStorage.setItem('products', JSON.stringify(products));
}
window.addEventListener('DOMContentLoaded', async () => {
    if(localStorage.getItem('products') === null){
        await fetchProducts();
    }
    const prodList = document.getElementById('product-list');
    const products = JSON.parse(localStorage.getItem('products'));

    let addedToCart = [];
    if (localStorage.getItem('cart') != null){
        addedToCart = JSON.parse(localStorage.getItem('cart'));
        document.getElementById('cart-count').innerHTML = addedToCart.length;
    }
    products.forEach(product => {
        const productElem = new ProductItem(product, addedToCart);
        prodList.appendChild(productElem);
    });
    
});