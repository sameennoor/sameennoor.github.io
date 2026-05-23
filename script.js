/* MOBILE MENU */
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
menuBtn.addEventListener("click", () => navLinks.classList.toggle("active"));

/* CLOSE MENU ON LINK CLICK */
document.querySelectorAll(".nav-links a").forEach(item => {
    item.addEventListener("click", () => navLinks.classList.remove("active"));
});

/* PROJECTS / CERTIFICATES TOGGLE */
function showProjects() {
    document.getElementById("projects-section").classList.add("active-content");
    document.getElementById("certificates-section").classList.remove("active-content");
    document.querySelectorAll(".show-btn")[0].classList.add("active-btn");
    document.querySelectorAll(".show-btn")[1].classList.remove("active-btn");
}
function showCertificates() {
    document.getElementById("certificates-section").classList.add("active-content");
    document.getElementById("projects-section").classList.remove("active-content");
    document.querySelectorAll(".show-btn")[1].classList.add("active-btn");
    document.querySelectorAll(".show-btn")[0].classList.remove("active-btn");
}

/* CONTACT FORM */
const form = document.querySelector(".contact-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
    form.reset();
});

/* NAVBAR SCROLL EFFECT — blue theme */
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    navbar.style.background = window.scrollY > 50
        ? "rgba(11,30,45,0.97)"
        : "rgba(11,30,45,0.82)";
});

/* TOOL CARDS: animate on scroll into view */
const toolCards = document.querySelectorAll(".tool-card");
const toolObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            toolObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });
toolCards.forEach(card => toolObserver.observe(card));

/* SCROLL REVEAL (all other elements) */
const revealSelectors = [
    ".home-text", ".home-image",
    ".edu-card",
    ".about-text-box", ".about-image-box",
    ".circle-card",
    ".flip-card",
    ".project-card", ".certificate-card",
    ".contact-info", ".contact-form",
    ".section-title", ".sub-title", ".skills-heading"
];
revealSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach((el, idx) => {
        el.classList.add("reveal");
        el.style.transitionDelay = `${idx * 0.08}s`;
    });
});
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

/* TYPING EFFECT on home h2 */
window.addEventListener("load", () => {
    const roles = ["BS CS Student", "Web Developer", "AI Enthusiast", "UI/UX Designer"];
    const el = document.querySelector(".home-text h2");
    if (!el) return;
    let ri = 0, ci = 0, deleting = false;
    function type() {
        const current = roles[ri];
        el.textContent = deleting
            ? current.substring(0, ci--)
            : current.substring(0, ci++);
        if (!deleting && ci === current.length + 1) {
            setTimeout(() => { deleting = true; type(); }, 1400);
            return;
        }
        if (deleting && ci < 0) {
            deleting = false;
            ri = (ri + 1) % roles.length;
            ci = 0;
        }
        setTimeout(type, deleting ? 45 : 80);
    }
    setTimeout(type, 2400);
});