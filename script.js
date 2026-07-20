/* =========================
   CART SYSTEM
========================= */

const cartCount = document.getElementById("cartCount");

const toast = document.getElementById("toast");

let cart = 0;


/* =========================
   ADD TO CART
========================= */

document.querySelectorAll(".add-cart").forEach(button => {


    button.addEventListener("click", () => {


        // Increase cart number

        cart++;


        // Update cart count

        cartCount.textContent = cart;


        // Change button design

        button.classList.add("added");


        // Change button text

        button.innerHTML = "✓ Added to Cart";


        // Show notification

        toast.classList.add("show");


        // Hide notification after 1.8 seconds

        setTimeout(() => {

            toast.classList.remove("show");

        }, 1800);


        // Return button to original state

        setTimeout(() => {


            button.classList.remove("added");


            button.innerHTML = `

                Add to Cart

                <span>
                    +
                </span>

            `;


        }, 1800);


    });


});


/* =========================
   WISHLIST / HEART BUTTON
========================= */

document.querySelectorAll(".heart").forEach(heart => {


    heart.addEventListener("click", () => {


        // Add or remove active class

        heart.classList.toggle("active");


        // Change heart icon

        if (heart.classList.contains("active")) {

            heart.textContent = "♥";

        } else {

            heart.textContent = "♡";

        }


    });


});


/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.querySelector(".nav-links");


menuBtn.addEventListener("click", () => {


    navLinks.classList.toggle("mobile-open");


});


/* =========================
   SEARCH BUTTON
========================= */

const searchBtn = document.getElementById("searchBtn");


searchBtn.addEventListener("click", () => {


    const query = prompt("What are you looking for?");


    if (query) {


        alert(

            "Searching for: " + query

        );


    }


});


/* =========================
   VIEW ALL BUTTON
========================= */

const viewAllBtn = document.getElementById("viewAllBtn");


viewAllBtn.addEventListener("click", () => {


    document.querySelector(".product-grid").scrollIntoView({

        behavior: "smooth"

    });


});


/* =========================
   CART BUTTON
========================= */

const cartBtn = document.getElementById("cartBtn");


cartBtn.addEventListener("click", () => {


    if (cart === 0) {


        alert("Your cart is empty!");


    } else {


        alert(

            "You have " +

            cart +

            " item(s) in your cart."

        );


    }


});


/* =========================
   SCROLL ANIMATION
========================= */

const animatedItems = document.querySelectorAll(

    ".category-card, .product-card, .benefit, .about-card"

);


animatedItems.forEach(item => {


    item.style.opacity = "0";

    item.style.transform = "translateY(30px)";

    item.style.transition = "0.7s";


});


const observer = new IntersectionObserver(

    entries => {


        entries.forEach(entry => {


            if (entry.isIntersecting) {


                entry.target.style.opacity = "1";


                entry.target.style.transform = "translateY(0)";


                observer.unobserve(entry.target);


            }


        });


    },


    {

        threshold: 0.15

    }


);


animatedItems.forEach(item => {


    observer.observe(item);


});


/* =========================
   CLOSE MOBILE MENU
========================= */

document.querySelectorAll(".nav-links a").forEach(link => {


    link.addEventListener("click", () => {


        navLinks.classList.remove("mobile-open");


    });


});