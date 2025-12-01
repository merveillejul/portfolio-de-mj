window.addEventListener("scroll", function(){
        const navbar = document.querySelector(".navbar");
        if(window.scrollY > 50){
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });


    

const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    mobileMenu.classList.toggle("show");
});

// Ferme le menu après clic sur un lien
document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
        burger.classList.remove("active");
        mobileMenu.classList.remove("show");
    });
});

// Active menu link based on scroll position
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu-depth a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (pageYOffset >= sectionTop) {
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




