// router.js, module. We're gonna map each module, 3 import statements, 

// importing the page modules

import { homePage } from "./pages/home.js";
import { aboutPage } from "./pages/about.js";
import { contactPage } from "./pages/contact.js";
import { ourDogs } from "./pages/our-dogs.js";
import { locationPage } from "./pages/location.js";
import { aboutMasonPage } from "./pages/about-mason.js";

const routes = {
    home: homePage,
    about: aboutPage,
    contact: contactPage,
    dogs: ourDogs,
    location: locationPage,
    mason: aboutMasonPage
};

export function loadPage(page) {
    const contentDiv = document.getElementById("content");
    if (!contentDiv) {
        console.error("Error: cannot find content.");
        return;
    }
    if (routes[page]) {
        contentDiv.innerHTML = routes[page]();
    } else {
        contentDiv.innerHTML = `<h3>Page Not Found.</h3>`;
    }
}