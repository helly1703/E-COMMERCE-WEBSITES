// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("mobile-open");

});


// ===============================
// CART
// ===============================

let cartCount = 0;

const cartCounter = document.getElementById("cartCount");
const toast = document.getElementById("toast");

const addCartButtons = document.querySelectorAll(".add-cart");

addCartButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        cartCount++;

        cartCounter.textContent = cartCount;

        button.textContent = "✓ Added to Cart";

        button.classList.add("added");

        toast.classList.add("show");

        setTimeout(function () {

            toast.classList.remove("show");

        }, 2000);

        setTimeout(function () {

            button.textContent = "Add to Cart +";

            button.classList.remove("added");

        }, 1500);

    });

});


// ===============================
// WISHLIST
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
// PRODUCT SEARCH & FILTER
// ===============================

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");

const productCards = document.querySelectorAll(".product-card");


function filterProducts() {

    const searchValue = searchInput.value.toLowerCase();

    const categoryValue = categoryFilter.value;

    const priceValue = priceFilter.value;


    productCards.forEach(function (product) {

        const productName =
            product.dataset.name.toLowerCase();

        const productCategory =
            product.dataset.category;

        const productPrice =
            Number(product.dataset.price);


        let searchMatch =
            productName.includes(searchValue);


        let categoryMatch =
            categoryValue === "all" ||
            productCategory === categoryValue;


        let priceMatch = true;


        if (priceValue === "low") {

            priceMatch = productPrice < 1000;

        }

        else if (priceValue === "medium") {

            priceMatch =
                productPrice >= 1000 &&
                productPrice <= 2000;

        }

        else if (priceValue === "high") {

            priceMatch = productPrice > 2000;

        }


        if (
            searchMatch &&
            categoryMatch &&
            priceMatch
        ) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

}


searchInput.addEventListener("input", filterProducts);

categoryFilter.addEventListener("change", filterProducts);

priceFilter.addEventListener("change", filterProducts);


// ===============================
// SEARCH BUTTON
// ===============================

const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function () {

    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

    searchInput.focus();

});