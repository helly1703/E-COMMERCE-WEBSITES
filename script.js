// ===============================
// CART SYSTEM - FIXED
// ===============================

let cart = [];

const cartBtn = document.getElementById("cartBtn");
const cartCount = document.getElementById("cartCount");

const addCartButtons = document.querySelectorAll(".add-cart");


// ADD TO CART
addCartButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const productCard = button.closest(".product-card");

        const productName =
            productCard.querySelector("h3").textContent;

        const productPrice =
            productCard.querySelector(".price b").textContent;

        const productImage =
            productCard.querySelector("img").getAttribute("src");


        cart.push({

            name: productName,

            price: productPrice,

            image: productImage

        });


        updateCartCount();


        button.innerHTML = "✓ Added to Cart";

        button.classList.add("added");


        setTimeout(function () {

            button.innerHTML = "Add to Cart <span>+</span>";

            button.classList.remove("added");

        }, 1500);

    });

});


// UPDATE CART COUNT
function updateCartCount() {

    cartCount.textContent = cart.length;

}


// CART BUTTON
cartBtn.addEventListener("click", function () {

    showCart();

});


// SHOW CART
function showCart() {

    let oldCart = document.querySelector(".cart-popup");

    if (oldCart) {

        oldCart.remove();

    }


    const cartPopup = document.createElement("div");

    cartPopup.className = "cart-popup";


    let cartHTML = `

        <div class="cart-header">

            <h2>Your Cart</h2>

            <button class="close-cart">✕</button>

        </div>

    `;


    if (cart.length === 0) {

        cartHTML += `

            <div class="empty-cart">

                <div class="empty-cart-icon">🛒</div>

                <h3>Your cart is empty</h3>

                <p>Add products to see them here.</p>

            </div>

        `;

    }

    else {

        cart.forEach(function (product, index) {

            cartHTML += `

                <div class="cart-item">

                    <img src="${product.image}">

                    <div>

                        <h3>${product.name}</h3>

                        <p>${product.price}</p>

                        <button class="remove-item"
                            onclick="removeProduct(${index})">

                            Remove

                        </button>

                    </div>

                </div>

            `;

        });


        cartHTML += `

            <div class="cart-total">

                <strong>

                    Total Items: ${cart.length}

                </strong>


                <button class="checkout-btn">

                    Proceed to Checkout →

                </button>

            </div>

        `;

    }


    cartPopup.innerHTML = cartHTML;

    document.body.appendChild(cartPopup);


    document

        .querySelector(".close-cart")

        .addEventListener("click", function () {

            cartPopup.remove();

        });

}


// REMOVE PRODUCT
function removeProduct(index) {

    cart.splice(index, 1);

    updateCartCount();

    showCart();

}