// product-item.js

class ProductItem extends HTMLElement {
  // TODO
  constructor(props, addedToCart){
    super();
     
    this.attachShadow({mode: 'open'});
    const wrapper = document.createElement('li');
    wrapper.setAttribute('class', 'product');

    const productImage = wrapper.appendChild(document.createElement('img'));
    productImage.src = props.image;
    productImage.alt = props.title;
    productImage.width = 200;
    productImage.style.maxHeight = "100%";

    const title = wrapper.appendChild(document.createElement('p'));
    title.setAttribute('class', 'title');
    title.textContent = props.title;

    const price = wrapper.appendChild(document.createElement('p'));
    price.setAttribute('class', 'price');
    price.textContent = '$'+props.price;

    const addToCart = wrapper.appendChild(document.createElement('button'));
    addToCart.textContent = addedToCart.includes(props.id) ? "Remove from Cart" : "Add to Cart";
    addToCart.addEventListener('click', () => {
      if(addToCart.textContent === "Add to Cart"){
        addToCart.textContent = "Remove from Cart";
        addedToCart.push(props.id);
        document.getElementById('cart-count').innerHTML = addedToCart.length;
        localStorage.setItem('cart', JSON.stringify(addedToCart));
        alert("Added to Cart!")
      }else{
        addToCart.textContent = "Add to Cart";
        addedToCart.splice(addedToCart.indexOf(props.id), 1);
        document.getElementById('cart-count').innerHTML = addedToCart.length;
        localStorage.setItem('cart', JSON.stringify(addedToCart));
        alert("Removed from Cart!")
      }
      
    });


    const cssLink = document.createElement('link');
    cssLink.setAttribute('rel', 'stylesheet');
    cssLink.setAttribute('href', './styles/styles.css');
    this.shadowRoot.append(cssLink, wrapper);
  }
}

customElements.define('product-item', ProductItem);