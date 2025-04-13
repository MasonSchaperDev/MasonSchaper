let homes = [];

fetch('json/homes.json')
.then(response => response.json())
.then(data => {
    homes = data;
    renderHouses();
});

function renderHouses(houseList = homes) {
    const homeList = document.getElementById('homes');
    homeList.innerHTML = '';

    if (houseList.length === 0) {
        const message = document.createElement('p');
        message.textContent = "No homes found matching your search.";
        message.style.fontSize = "24px";
        message.style.color = "red";
        homeList.appendChild(message);
        return;
    }

    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    houseList.forEach(home => {
        const isFavorite = favorites.includes(home.id.toString());
        const heartIcon = isFavorite ? "images/heart-filled-icon.png" : "images/heart-icon.png";

        const div = document.createElement('div');
        div.classList.add('home');
        div.innerHTML = `
            <a href="single-house.html?houseId=${home.id}"><img src="${home.image}" class="house-img"/></a>
            <img src="${heartIcon}" class="favorite-home" data-id="${home.id}"/>

            <div class="house-description">
                <p class="list-for-sale">Listing for Sale</p>
                <h3>$${home.price.toLocaleString()}</h3>
                <div class="details-container">
                    <p><strong>${home.bed}</strong> bed</p>
                    <p><strong>${home.bath}</strong> bath</p>
                    <p><strong>${home.space}</strong> sqft</p>
                </div>
                <p class="house-location">${home.location}</p>
            </div>
        `;
        homeList.appendChild(div);
    });

    document.querySelectorAll(".favorite-home").forEach(heart => {
        heart.addEventListener("click", function() {
            toggleFavorite(this.dataset.id, this);
        });
    });
}

function filterHouses() {
    const searchTerm = document.getElementById("search").value.toLowerCase();
    const filteredHouses = homes.filter(house => 
        house.location.toLowerCase().includes(searchTerm)
    );
    renderHouses(filteredHouses);
}

function toggleFavorite(houseId, heartIcon) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (favorites.includes(houseId)) {
        favorites = favorites.filter(id => id !== houseId);
        heartIcon.src = "images/heart-icon.png";
    } else {
        favorites.push(houseId);
        heartIcon.src = "images/heart-filled-icon.png";
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    updateFavoriteCount();
}

function updateFavoriteCount() {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const countElement = document.getElementById("favorite-count");

    if (countElement) {
        countElement.textContent = favorites.length;
    }
}   
document.getElementById('search').addEventListener("input", filterHouses);
updateFavoriteCount();

// this handles all of the STATE for logins
const savedInfo = JSON.parse(localStorage.getItem('loginInfo'));
const savedInfoSession = JSON.parse(localStorage.getItem('loginInfoSession'));
const userDisplay = document.getElementById('user');
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const logoutBtn = document.getElementById('logout-btn');
const favoriteCount = document.getElementById('favorite-count');

if (savedInfoSession && savedInfoSession.username) {
    userDisplay.textContent = savedInfo.username;
    loginBtn.style.display = "none";
    signupBtn.style.display = "none";
    favoriteCount.style.right = "15%";
    logoutBtn.style.display = "unset";
} else {
    userDisplay.textContent = 'Guest';
}

function logOutUser() {
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const favoriteCount = document.getElementById('favorite-count');
    const logoutBtn = document.getElementById('logout-btn');
    const userDisplay = document.getElementById('user');

    localStorage.removeItem('loginInfoSession');
    loginBtn.style.display = "unset";
    signupBtn.style.display = "unset";

    if(favoriteCount) {
        favoriteCount.style.right = "10%";
    }

    logoutBtn.style.display = "none";

    if (userDisplay) {
        userDisplay.textContent = 'Guest';
    }
}

logoutBtn.addEventListener('click', logOutUser);