const menuEl = document.querySelector(".menu");
const socialListsEl = document.querySelector(".social-lists");
const menuTextEl = document.querySelector(".menu p");
const liEls = document.querySelectorAll(".social-lists li");

menuEl.addEventListener("click", () => {
    socialListsEl.classList.toggle("hide");
    menuEl.classList.toggle("rotate");
});

liEls.forEach((liEl) => {
    liEl.addEventListener("click", () => {
      menuTextEl.innerHTML = liEl.innerHTML;
      socialListsEl.classList.add("hide");
      menuEl.classList.toggle("rotate");
    });
});
