// =====================================
// MOBILE MENU
// =====================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("mobile-open");

    });

}


// =====================================
// CART SYSTEM
// =====================================

let cartCount = 0;

const cartCounter = document.getElementById("cartCount");
const toast = document.getElementById("toast");

const addCartButtons =
    document.querySelectorAll(".add-cart");


addCartButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        cartCount++;

        cartCounter.textContent = cartCount;

        button.innerHTML = "✓ Added to Cart";

        button.classList.add("added");

        showToast(
            "✓ Product added to cart!"
        );


        setTimeout(function () {

            button.innerHTML =
                "Add to Cart <span>+</span>";

            button.classList.remove("added");

        }, 1500);

    });

});


// =====================================
// TOAST MESSAGE
// =====================================

function showToast(message) {

    if (!toast) return;

    toast.textContent = message;

    toast.classList.add("show");


    setTimeout(function () {

        toast.classList.remove("show");

    }, 2500);

}


// =====================================
// ORDER CONFIRMATION SYSTEM
// =====================================

const cartBtn =
    document.getElementById("cartBtn");


if (cartBtn) {

    cartBtn.addEventListener("click", function () {


        if (cartCount === 0) {

            alert(
                "Your cart is empty. Please add a product first."
            );

            return;

        }


        const confirmOrder =
            confirm(

                "🛒 Cart Summary\n\n" +

                "Total Products: " +
                cartCount +

                "\n\nDo you want to confirm your order?"

            );


        if (confirmOrder) {

            showOrderSuccess();

        }

    });

}


// =====================================
// ORDER SUCCESS POPUP
// =====================================

function showOrderSuccess() {

    const successPopup =
        document.createElement("div");


    successPopup.className =
        "order-success-popup";


    successPopup.innerHTML = `

        <div class="success-box">

            <div class="success-icon">
                ✓
            </div>

            <h2>
                Order Confirmed Successfully!
            </h2>

            <p>
                Thank you for shopping with ShopHub.
            </p>

            <button id="closeSuccess">
                Continue Shopping
            </button>

        </div>

    `;


    document.body.appendChild(successPopup);


    const closeSuccess =
        document.getElementById("closeSuccess");


    closeSuccess.addEventListener(
        "click",
        function () {

            successPopup.remove();

        }
    );


    cartCount = 0;

    cartCounter.textContent = cartCount;


    addCartButtons.forEach(function (button) {

        button.innerHTML =
            "Add to Cart <span>+</span>";

        button.classList.remove("added");

    });

}


// =====================================
// WISHLIST
// =====================================

const heartButtons =
    document.querySelectorAll(".heart");


heartButtons.forEach(function (heart) {

    heart.addEventListener("click", function () {

        heart.classList.toggle("active");


        if (
            heart.classList.contains("active")
        ) {

            heart.textContent = "♥";

            showToast(
                "♥ Added to Wishlist!"
            );

        } else {

            heart.textContent = "♡";

            showToast(
                "Removed from Wishlist"
            );

        }

    });

});


// =====================================
// SEARCH BOX
// =====================================

const searchBtn =
    document.getElementById("searchBtn");


const searchBox =
    document.getElementById("searchBox");


const searchInput =
    document.getElementById("searchInput");


const closeSearch =
    document.getElementById("closeSearch");


if (searchBtn && searchBox) {

    searchBtn.addEventListener(
        "click",
        function () {

            searchBox.classList.toggle("show");

            searchInput.focus();

        }
    );

}


if (closeSearch) {

    closeSearch.addEventListener(
        "click",
        function () {

            searchBox.classList.remove("show");

            searchInput.value = "";

            filterProducts();

        }
    );

}


// =====================================
// PRODUCT SEARCH
// =====================================

const productCards =
    document.querySelectorAll(".product-card");


function filterProducts() {

    const searchValue =
        searchInput.value
            .toLowerCase()
            .trim();


    productCards.forEach(function (product) {


        const productName =
            product
                .querySelector("h3")
                .textContent
                .toLowerCase();


        const productCategory =
            product
                .querySelector("small")
                .textContent
                .toLowerCase();


        if (

            productName.includes(
                searchValue
            )

            ||

            productCategory.includes(
                searchValue
            )

        ) {

            product.style.display =
                "block";

        } else {

            product.style.display =
                "none";

        }

    });

}


if (searchInput) {

    searchInput.addEventListener(
        "input",
        filterProducts
    );

}


// =====================================
// VIEW ALL PRODUCTS
// =====================================

const viewAllBtn =
    document.getElementById("viewAllBtn");


if (viewAllBtn) {

    viewAllBtn.addEventListener(
        "click",
        function () {


            productCards.forEach(
                function (product) {

                    product.style.display =
                        "block";

                }
            );


            document
                .getElementById("products")
                .scrollIntoView({

                    behavior: "smooth"

                });

        }
    );

}


// =====================================
// USER ACCOUNT BUTTON
// =====================================

const userBtn =
    document.getElementById("userBtn");


if (userBtn) {

    userBtn.addEventListener(
        "click",
        function () {

            alert(

                "Welcome to ShopHub! 👋\n\n" +

                "Account feature coming soon."

            );

        }
    );

}


// =====================================
// SMOOTH SCROLL
// =====================================

const allLinks =
    document.querySelectorAll(
        "a[href^='#']"
    );


allLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function (event) {


            const targetId =
                link.getAttribute("href");


            if (

                targetId !== "#"

                &&

                document.querySelector(
                    targetId
                )

            ) {

                event.preventDefault();


                document
                    .querySelector(targetId)
                    .scrollIntoView({

                        behavior: "smooth"

                    });


                if (navLinks) {

                    navLinks.classList.remove(
                        "mobile-open"
                    );

                }

            }

        }
    );

});