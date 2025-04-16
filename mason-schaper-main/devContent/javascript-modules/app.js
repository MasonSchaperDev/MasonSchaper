// app.js
import { loadPage } from "./router.js";

document.addEventListener("DOMContentLoaded", () => {
    loadPage("home");
    
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const route = event.target.getAttribute("data-route");
            loadPage(route);
        });
    });
});