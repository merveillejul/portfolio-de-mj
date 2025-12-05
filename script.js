// Effet scroll : navbar qui change
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".header-bar"); // nouveau nom
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Menu burger
const burger = document.getElementById("menuButton"); // nouveau nom
const mobileMenu = document.getElementById("menuPanel"); // nouveau nom

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    mobileMenu.classList.toggle("show");
});

// Fermer le menu après clic sur un lien mobile
document.querySelectorAll(".menu-panel a").forEach(link => { // nouveau nom
    link.addEventListener("click", () => {
        burger.classList.remove("active");
        mobileMenu.classList.remove("show");
    });
});

// Active le lien du menu en fonction du scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a"); // nouveau nom

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});
