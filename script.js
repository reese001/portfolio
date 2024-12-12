new Glide(".glide", {
    type: "carousel",
    startAt: 0,
    perView: 3,
    gap: 20,
    breakpoints: {
        768: {
            perView: 1,
        },
        1024: {
            perView: 2,
        },
    },
}).mount();

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    // Update active section on scroll
    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            // Add some offset to account for the sticky header
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("active");
            }
        });
    });
});
