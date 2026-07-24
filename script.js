// ===============================
// CART SYSTEM
// ===============================

let cartCount = 0;

const cartCounter = document.getElementById("cartCount");
const toast = document.getElementById("toast");

const addCartButtons = document.querySelectorAll(".add-cart");


// ADD PRODUCT TO CART
addCartButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        cartCount++;

        cartCounter.textContent = cartCount;

        button.textContent = "✓ Added to Cart";

        button.classList.add("added");

        toast.textContent = "✓ Product added to cart!";
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
// CART BUTTON
// ===============================

const cartBtn = document.getElementById("cartBtn");

cartBtn.addEventListener("click", function () {

    if (cartCount === 0) {

        showCustomPopup(
            "Your Cart is Empty",
            "Please add some products to your cart first."
        );

        return;

    }

    showCartPopup();

});


// ===============================
// CART POPUP
// ===============================

function showCartPopup() {

    const popup = document.createElement("div");

    popup.className = "cart-popup-overlay";

    popup.innerHTML = `

        <div class="cart-popup">

            <button class="close-popup">
                ✕
            </button>

            <div class="popup-icon">
                🛒
            </div>

            <h2>
                Your Shopping Cart
            </h2>

            <p>
                You have <strong>${cartCount}</strong> item(s) in your cart.
            </p>

            <button class="confirm-order-btn" id="confirmOrderBtn">

                Confirm Order →

            </button>

        </div>

    `;

    document.body.appendChild(popup);


    // CLOSE POPUP

    popup.querySelector(".close-popup").addEventListener(
        "click",
        function () {

            popup.remove();

        }
    );


    // CONFIRM ORDER

    popup.querySelector("#confirmOrderBtn").addEventListener(
        "click",
        function () {

            popup.remove();

            cartCount = 0;

            cartCounter.textContent = "0";

            showSuccessPopup();

        }
    );

}


// ===============================
// SUCCESS POPUP
// ===============================

function showSuccessPopup() {

    const popup = document.createElement("div");

    popup.className = "success-popup-overlay";

    popup.innerHTML = `

        <div class="success-popup">

            <div class="success-icon">
                ✓
            </div>

            <h2>
                Order Confirmed Successfully!
            </h2>

            <p>
                Thank you for shopping with ShopHub.
            </p>

            <button id="successCloseBtn">
                Continue Shopping
            </button>

        </div>

    `;

    document.body.appendChild(popup);


    document
        .getElementById("successCloseBtn")
        .addEventListener("click", function () {

            popup.remove();

        });

}


// ===============================
// EMPTY CART / GENERAL POPUP
// ===============================

function showCustomPopup(title, message) {

    const popup = document.createElement("div");

    popup.className = "success-popup-overlay";

    popup.innerHTML = `

        <div class="success-popup">

            <div class="success-icon">
                🛒
            </div>

            <h2>
                ${title}
            </h2>

            <p>
                ${message}
            </p>

            <button id="closeEmptyPopup">
                Continue Shopping
            </button>

        </div>

    `;

    document.body.appendChild(popup);


    document
        .getElementById("closeEmptyPopup")
        .addEventListener("click", function () {

            popup.remove();

        });

}