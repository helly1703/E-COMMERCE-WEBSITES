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

let cartCount = 0;

const cartCounter = document.getElementById("cartCount");
const toast = document.getElementById("toast");

const addCartButtons = document.querySelectorAll(".add-cart");


addCartButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        cartCount++;

        cartCounter.textContent = cartCount;

        button.innerHTML = "✓ Added to Cart";

        button.classList.add("added");

        toast.classList.add("show");


        setTimeout(function () {

            toast.classList.remove("show");

        }, 2000);


        setTimeout(function () {

            button.innerHTML = "Add to Cart <span>+</span>";

            button.classList.remove("added");

        }, 1500);

    });

});


// ===============================
// WISHLIST / HEART
// ===============================

const heartButtons = document.querySelectorAll(".heart");


heartButtons.forEach(function (heart) {

    heart.addEventListener("click", function () {

        heart.classList.toggle("active");


        if (heart.classList.contains("active")) {

            heart.textContent = "♥";

        } else {

            heart.textContent = "♡";

        }

    });

});


// ===============================
// SEARCH BOX
// ===============================

const searchBtn = document.getElementById("searchBtn");
const searchBox = document.getElementById("searchBox");
const searchInput = document.getElementById("searchInput");
const closeSearch = document.getElementById("closeSearch");


if (searchBtn && searchBox) {

    searchBtn.addEventListener("click", function () {

        searchBox.classList.toggle("show");

        searchInput.focus();

    });

}


if (closeSearch) {

    closeSearch.addEventListener("click", function () {

        searchBox.classList.remove("show");

        searchInput.value = "";

        filterProducts();

    });

}


// ===============================
// PRODUCT SEARCH
// ===============================

const productCards = document.querySelectorAll(".product-card");


function filterProducts() {

    const searchValue =
        searchInput.value.toLowerCase().trim();


    productCards.forEach(function (product) {

        const productName =
            product.querySelector("h3").textContent.toLowerCase();


        const productCategory =
            product.querySelector("small").textContent.toLowerCase();


        if (
            productName.includes(searchValue) ||
            productCategory.includes(searchValue)
        ) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

}


if (searchInput) {

    searchInput.addEventListener(
        "input",
        filterProducts
    );

}


// ===============================
// VIEW ALL BUTTON
// ===============================

const viewAllBtn =
    document.getElementById("viewAllBtn");


if (viewAllBtn) {

    viewAllBtn.addEventListener("click", function () {

        productCards.forEach(function (product) {

            product.style.display = "block";

        });

        window.location.hash = "products";

    });

}


// ===============================
// SMOOTH NAVIGATION
// ===============================

const navLinksAll =
    document.querySelectorAll("a[href^='#']");


navLinksAll.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId =
            link.getAttribute("href");


        if (
            targetId !== "#" &&
            document.querySelector(targetId)
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

    });

});


// ===============================
// ACCOUNT BUTTON
// ===============================

const userBtn =
    document.getElementById("userBtn");


if (userBtn) {

    userBtn.addEventListener("click", function () {

        alert(
            "Welcome to ShopHub! Account feature coming soon."
        );

    });

}


// ===============================
// CART BUTTON
// ===============================

const cartBtn =
    document.getElementById("cartBtn");


if (cartBtn) {

    cartBtn.addEventListener("click", function () {

        if (cartCount === 0) {

            alert(
                "Your cart is empty."
            );

        } else {

            alert(
                "You have " +
                cartCount +
                " item(s) in your cart."
            );

        }

    });

}