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
// CART
// ===============================

let cartCount = 0;

const cartCounter = document.getElementById("cartCount");
const toast = document.getElementById("toast");

const addCartButtons = document.querySelectorAll(".add-cart");

addCartButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        cartCount++;

        if (cartCounter) {
            cartCounter.textContent = cartCount;
        }

        button.innerHTML = "✓ Added to Cart";

        button.classList.add("added");

        if (toast) {
            toast.classList.add("show");

            setTimeout(function () {
                toast.classList.remove("show");
            }, 2000);
        }

        setTimeout(function () {

            button.innerHTML = "Add to Cart <span>+</span>";

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

    if (!searchInput || !categoryFilter || !priceFilter) {
        return;
    }

    const searchValue =
        searchInput.value.toLowerCase();

    const categoryValue =
        categoryFilter.value;

    const priceValue =
        priceFilter.value;


    productCards.forEach(function (product) {

        const productName =
            (product.dataset.name || "").toLowerCase();

        const productCategory =
            product.dataset.category || "";

        const productPrice =
            Number(product.dataset.price || 0);


        const searchMatch =
            productName.includes(searchValue);


        const categoryMatch =
            categoryValue === "all" ||
            productCategory === categoryValue;


        let priceMatch = true;


        if (priceValue === "low") {

            priceMatch =
                productPrice < 1000;

        }


        else if (priceValue === "medium") {

            priceMatch =
                productPrice >= 1000 &&
                productPrice <= 2000;

        }


        else if (priceValue === "high") {

            priceMatch =
                productPrice > 2000;

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


if (searchInput) {
    searchInput.addEventListener(
        "input",
        filterProducts
    );
}


if (categoryFilter) {
    categoryFilter.addEventListener(
        "change",
        filterProducts
    );
}


if (priceFilter) {
    priceFilter.addEventListener(
        "change",
        filterProducts
    );
}


// ===============================
// SEARCH BUTTON
// ===============================

const searchBtn =
    document.getElementById("searchBtn");


if (searchBtn) {

    searchBtn.addEventListener(
        "click",
        function () {

            const productsSection =
                document.getElementById("products");


            if (productsSection) {

                productsSection.scrollIntoView({
                    behavior: "smooth"
                });

            }


            if (searchInput) {

                setTimeout(function () {

                    searchInput.focus();

                }, 500);

            }

        }
    );

}


// ===============================
// VIEW ALL PRODUCTS
// ===============================

const viewAllBtn =
    document.getElementById("viewAllBtn");


if (viewAllBtn) {

    viewAllBtn.addEventListener(
        "click",
        function () {

            productCards.forEach(function (product) {

                product.style.display = "block";

            });

            if (searchInput) {
                searchInput.value = "";
            }

            if (categoryFilter) {
                categoryFilter.value = "all";
            }

            if (priceFilter) {
                priceFilter.value = "all";
            }

        }
    );

}


// ===============================
// CART BUTTON
// ===============================

const cartBtn =
    document.getElementById("cartBtn");


if (cartBtn) {

    cartBtn.addEventListener(
        "click",
        function () {

            if (cartCount === 0) {

                alert("Your cart is empty!");

            } else {

                alert(
                    "You have " +
                    cartCount +
                    " item(s) in your cart."
                );

            }

        }
    );

}