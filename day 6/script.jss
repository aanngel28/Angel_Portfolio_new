// =================================================
// FOOTER YEAR
// =================================================

const footerYear = document.querySelector(".footer-year");

if (footerYear) {

    footerYear.textContent =
        new Date().getFullYear();

}


// =================================================
// GREETING
// =================================================

function getGreeting() {

    const hour = new Date().getHours();

    if (hour < 12) {

        return "Good Morning";

    }

    if (hour < 17) {

        return "Good Afternoon";

    }

    return "Good Evening";

}


const heroTitle =
    document.querySelector(".hero-section h1");


if (heroTitle) {

    heroTitle.innerHTML =
        `${getGreeting()}, I'm
        <span class="highlight">
        Ashika
        </span> .`;

}


// =================================================
// LIGHT / DARK MODE
// =================================================

const themeBtn =
    document.getElementById("theme-toggle");

const moonIcon =
    document.querySelector(".moon-icon");

const sunIcon =
    document.querySelector(".sun-icon");


// Check saved theme

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark");

}


// Function to update icon

function updateThemeIcon() {

    if (document.body.classList.contains("dark")) {

        moonIcon.style.display = "none";

        sunIcon.style.display = "block";

    } else {

        moonIcon.style.display = "block";

        sunIcon.style.display = "none";

    }

}


// Set correct icon when page loads

updateThemeIcon();


if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");


        if (
            document.body.classList.contains("dark")
        ) {

            localStorage.setItem(
                "theme",
                "dark"
            );

        } else {

            localStorage.setItem(
                "theme",
                "light"
            );

        }


        updateThemeIcon();

    });

}


// =================================================
// ACTIVE NAVIGATION
// =================================================

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (
            window.scrollY >= sectionTop
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");


        if (
            link.getAttribute("href")
            === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


// =================================================
// HEADER SHADOW
// =================================================

const header =
    document.querySelector(".site-header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 20px rgba(0,0,0,.2)";

    } else {

        header.style.boxShadow =
            "none";

    }

});


// =================================================
// PROJECT FILTER BUTTONS
// =================================================

const filterButtons =
    document.querySelectorAll(
        ".project-filter button"
    );


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        button.classList.add("active");

    });

});


// =================================================
// CONTACT FORM
// =================================================

const contactForm =
    document.querySelector("form");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();

            alert(
                "Thank you! Your message has been received."
            );

            contactForm.reset();

        }
    );

}