const nextEl = document.getElementById("next");
const backEl = document.getElementById("back");
const submitEl = document.getElementById("submit");

const progressEl = document.querySelector(".progress-bar-fill");
const progressEmptyEl = document.querySelector(".progress-bar-empty");
const stepEl = document.querySelectorAll(".step");
const pageOneEl = document.querySelector(".fill-out-row");
const pageTwoEl = document.querySelector(".fill-out-row-second-page");
const pageThreeEl = document.querySelector(".fill-out-row-third-page");
const pageLastEl = document.querySelector(".fill-out-row-last-page");

let filledBars = 0;

document.getElementById("back").style.backgroundColor = '#ccc';
document.getElementById("submit").style.display = 'none';

nextEl.addEventListener("click", () => {
    if (filledBars < stepEl.length) {
        filledBars++;
        if (filledBars === 1) {
            document.querySelector(".fill-out-row").style.display = "none";
            document.querySelector(".fill-out-row-second-page").style.display = "flex";
            document.getElementById("back").style.backgroundColor = 'rgb(36, 191, 67)';
        }
        if (filledBars === 2) {
            document.querySelector(".fill-out-row-second-page").style.display = "none";
            document.querySelector(".fill-out-row-third-page").style.display = "flex";
        }
        if (filledBars === 3) {
            document.querySelector(".fill-out-row-third-page").style.display = "none";
            document.querySelector(".fill-out-row-last-page").style.display = "unset";
            document.getElementById("app-container").style.marginLeft = "15%";
            document.getElementById("next").style.display = 'none';
            document.getElementById("submit").style.display = 'unset';
        }
        console.log(filledBars);
    }
    updateProgress();
});

backEl.addEventListener("click", () => {
    if (filledBars > 0) {
        filledBars--; 
        if (filledBars === 0) {
            document.querySelector(".fill-out-row").style.display = "flex";
            document.querySelector(".fill-out-row-second-page").style.display = "none";
            document.getElementById("back").style.backgroundColor = '#ccc';
        }
        if (filledBars === 1) {
            document.querySelector(".fill-out-row-second-page").style.display = "flex";
            document.querySelector(".fill-out-row-third-page").style.display = "none";
        }
        if (filledBars === 2) {
            document.querySelector(".fill-out-row-third-page").style.display = "flex";
            document.querySelector(".fill-out-row-last-page").style.display = "none";
            document.getElementById("next").style.backgroundColor = 'rgb(36, 191, 67)';
            document.getElementById("app-container").style.marginLeft = "0%";
            document.getElementById("next").style.display = 'unset';
            document.getElementById("submit").style.display = 'none';
        }
    }
    updateProgress();
});

submitEl.addEventListener("click", () => {
    document.getElementById("app-container").style.display = "none";
    document.getElementById("completed").style.display = "unset";
    document.querySelector(".container").style.display = "none";
});

const updateProgress = () => {
    stepEl.forEach((step, index) => {
        if(index < filledBars) {
            step.classList.add("checked");
            step.innerHTML = `<p class="check">✔</p>`;
        }

        else {
            step.classList.remove("checked");
            step.innerHTML = `<p class="unchecked">x</p>`;
        }
    });
    const checked = document.querySelectorAll('.checked');

    progressEl.style.width = ((checked.length - 1) / (stepEl.length - 1)) * 250 + "px";

    if (checked === 0) {
        backEl.disabled = true;
        document.getElementById("back").style.backgroundColor = '#ccc';
    }

    else if (checked === stepEl.length) {
        nextEl.disabled = true;
        
    }

    else {
        nextEl.disabled = false;
        backEl.disabled = false;
    }
       
    
}