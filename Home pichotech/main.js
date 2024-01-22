//--------------------------------------------------------------
//Shopping Cart
const cartIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer =document.querySelector("#shoppingCartContainer");

cartIcon.addEventListener("click", toggleShoppingCart);
function toggleShoppingCart() {
    shoppingCartContainer.classList.toggle("inactive");
}
const formCart = document.querySelector(".formCart")

formCart.addEventListener("submit", (event) => {
    event.preventDefault()
})
