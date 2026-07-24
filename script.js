// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("mobile-open");

    });

}


// ===============================
// CART SYSTEM
// ===============================

let cart = [];

const cartCount = document.getElementById("cartCount");
const cartBtn = document.getElementById("cartBtn");
const toast = document.getElementById("toast");

const addCartButtons = document.querySelectorAll(".add-cart");


// ADD PRODUCT TO CART

addCartButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const productCard = button.closest(".product-card");

        const productName =
            productCard.querySelector("h3").textContent;

        const productPrice =
            productCard.querySelector(".price b").textContent;

        const productImage =
            productCard.querySelector("img").src;


        const product = {

            name: productName,

            price: productPrice,

            image: productImage

        };


        cart.push(product);


        updateCartCount();

        showToast(productName + " added to cart!");


        button.textContent = "✓ Added to Cart";

        button.classList.add("added");


        setTimeout(function () {

            button.innerHTML = "Add to Cart <span>+</span>";

            button.classList.remove("added");

        }, 1500);

    });

});


// UPDATE CART COUNT

function updateCartCount() {

    if (cartCount) {

        cartCount.textContent = cart.length;

    }

}


// ===============================
// CART POPUP
// ===============================

if (cartBtn) {

    cartBtn.addEventListener("click", function () {

        openCart();

    });

}


function openCart() {

    let cartPopup =
        document.getElementById("cartPopup");


    if (!cartPopup) {

        cartPopup =
            document.createElement("div");

        cartPopup.id = "cartPopup";

        cartPopup.className = "cart-popup";


        document.body.appendChild(cartPopup);

    }


    displayCart();

}


function displayCart() {

    const cartPopup =
        document.getElementById("cartPopup");


    if (cart.length === 0) {

        cartPopup.innerHTML = `

            <div class="cart-header">

                <h2>Your Cart</h2>

                <button onclick="closeCart()">✕</button>

            </div>


            <div class="empty-cart">

                🛒

                <h3>Your cart is empty</h3>

                <p>Add some products to your cart.</p>

            </div>

        `;

        return;

    }


    let cartItems = "";


    cart.forEach(function (item, index) {

        cartItems += `

            <div class="cart-item">

                <img src="${item.image}" alt="${item.name}">


                <div class="cart-item-info">

                    <h3>${item.name}</h3>

                    <p>${item.price}</p>

                    <button onclick="removeFromCart(${index})">

                        Remove

                    </button>

                </div>

            </div>

        `;

    });


    cartPopup.innerHTML = `

        <div class="cart-header">

            <h2>Your Cart</h2>

            <button onclick="closeCart()">✕</button>

        </div>


        <div class="cart-items">

            ${cartItems}

        </div>


        <div class="cart-footer">

            <h3>

                Total Items: ${cart.length}

            </h3>


            <button class="checkout-btn">

                Proceed to Checkout →

            </button>

        </div>

    `;

}


// REMOVE PRODUCT

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCartCount();

    displayCart();

}


// CLOSE CART

function closeCart() {

    const cartPopup =
        document.getElementById("cartPopup");


    if (cartPopup) {

        cartPopup.remove();

    }

}


// ===============================
// WISHLIST
// ===============================

const heartButtons =
    document.querySelectorAll(".heart");


heartButtons.forEach(function (heart) {

    heart.addEventListener("click", function () {

        heart.classList.toggle("active");


        if (heart.classList.contains("active")) {

            heart.textContent = "♥";

            showToast("Added to Wishlist ❤️");

        }

        else {

            heart.textContent = "♡";

            showToast("Removed from Wishlist");

        }

    });

});


// ===============================
// SEARCH SYSTEM
// ===============================

const searchBtn =
    document.getElementById("searchBtn");

const searchBox =
    document.getElementById("searchBox");

const searchInput =
    document.getElementById("searchInput");

const closeSearch =
    document.getElementById("closeSearch");


if (searchBtn && searchBox) {

    searchBtn.addEventListener("click", function () {

        searchBox.classList.toggle("active");

        if (searchInput) {

            searchInput.focus();

        }

    });

}


if (closeSearch) {

    closeSearch.addEventListener("click", function () {

        searchBox.classList.remove("active");

    });

}


if (searchInput) {

    searchInput.addEventListener("input", function () {

        const searchValue =
            searchInput.value.toLowerCase();


        const products =
            document.querySelectorAll(".product-card");


        products.forEach(function (product) {

            const productName =
                product.querySelector("h3")
                    .textContent
                    .toLowerCase();


            if (productName.includes(searchValue)) {

                product.style.display = "block";

            }

            else {

                product.style.display = "none";

            }

        });

    });

}


// ===============================
// VIEW ALL PRODUCTS
// ===============================

const viewAllBtn =
    document.getElementById("viewAllBtn");


if (viewAllBtn) {

    viewAllBtn.addEventListener("click", function () {

        const products =
            document.querySelectorAll(".product-card");


        products.forEach(function (product) {

            product.style.display = "block";

        });


        showToast("All products are now visible!");

    });

}


// ===============================
// TOAST MESSAGE
// ===============================

function showToast(message) {

    if (!toast) return;


    toast.textContent = "✓ " + message;


    toast.classList.add("show");


    setTimeout(function () {

        toast.classList.remove("show");

    }, 2500);

}


// ===============================
// SIGN IN BUTTON
// ===============================

const userBtn =
    document.getElementById("userBtn");


if (userBtn) {

    userBtn.addEventListener("click", function () {

        openLoginPopup();

    });

}


function openLoginPopup() {

    const loginPopup =
        document.createElement("div");


    loginPopup.className =
        "login-popup";


    loginPopup.innerHTML = `

        <div class="login-box">

            <button class="close-login"
                onclick="this.parentElement.parentElement.remove()">

                ✕

            </button>


            <h2>Welcome Back</h2>


            <p>Sign in to your ShopHub account</p>


            <input

                type="email"

                placeholder="Email Address"

            >


            <input

                type="password"

                placeholder="Password"

            >


            <button class="login-submit">

                Sign In →

            </button>


            <small>

                New to ShopHub?

                <b>Create an account</b>

            </small>

        </div>

    `;


    document.body.appendChild(loginPopup);


    const loginSubmit =
        loginPopup.querySelector(".login-submit");


    loginSubmit.addEventListener("click", function () {

        showToast("Signed in successfully!");

        loginPopup.remove();

    });

}


// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll("a[href^='#']")
    .forEach(function (link) {

        link.addEventListener("click", function (event) {

            const target =
                document.querySelector(
                    link.getAttribute("href")
                );


            if (target) {

                event.preventDefault();


                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });