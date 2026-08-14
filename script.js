const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");


// MOBILE MENU

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// CLOSE MENU AFTER CLICKING

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// SIMPLE SCROLL REVEAL

const elements = document.querySelectorAll(
    ".project-card, .experience-item, .review, .certificate-grid article"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.12
    }
);


elements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);

});