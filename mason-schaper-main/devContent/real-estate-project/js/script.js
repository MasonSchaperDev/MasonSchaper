// ============================
// Favorites & Session Management
// ============================

let savedInfoSession = JSON.parse(localStorage.getItem('loginInfoSession'));
const savedInfo = JSON.parse(localStorage.getItem('loginInfo'));

if (!savedInfoSession || !savedInfoSession.username) {
    localStorage.setItem('favorites', JSON.stringify([]));
}

function getFavoritesKey() {
    return (savedInfoSession && savedInfoSession.username) ?
           `favorites_${savedInfoSession.username}` :
           'favorites';
}

// Select UI elements.
const userDisplay = document.getElementById('username');
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const logoutBtn = document.getElementById('logout-btn');
const favoriteCount = document.getElementById('favorite-count');

function updateFavoriteCount() {
    if (!favoriteCount) return;
    const isLoggedIn = savedInfoSession && savedInfoSession.username;
    if (!isLoggedIn) {
        favoriteCount.textContent = "0";
        return;
    }
    const favorites = JSON.parse(localStorage.getItem(getFavoritesKey()) || '[]');
    favoriteCount.textContent = favorites.length;
}

updateFavoriteCount();

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

    const favorites = JSON.parse(localStorage.getItem(getFavoritesKey()) || '[]');

    houseList.forEach(home => {
        const isFavorite = favorites.includes(home.id.toString());
        const heartIcon = isFavorite ? "images/heart-filled-icon.png" : "images/heart-icon.png";

        const div = document.createElement('div');
        div.classList.add('home');
        div.innerHTML = `
            <a href="single-house.html?houseId=${home.id}">
                <img src="${home.image}" class="house-img"/>
            </a>
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
    houseId = houseId.toString();
    const key = getFavoritesKey();
    let favorites = JSON.parse(localStorage.getItem(key) || '[]');

    if (favorites.includes(houseId)) {
        favorites = favorites.filter(id => id !== houseId);
        heartIcon.src = "images/heart-icon.png";
    } else {
        favorites.push(houseId);
        heartIcon.src = "images/heart-filled-icon.png";
    }

    localStorage.setItem(key, JSON.stringify(favorites));
    updateFavoriteCount();
}

document.getElementById('search').addEventListener("input", filterHouses);
updateFavoriteCount();

// Update UI based on login state.
if (savedInfoSession && savedInfoSession.username) {
    userDisplay.textContent = savedInfoSession.username;
    loginBtn.style.display = "none";
    signupBtn.style.display = "none";
    favoriteCount.style.top = "5px";
    favoriteCount.style.left = "-11%";
    logoutBtn.style.display = "block"; 
} else {
    userDisplay.textContent = 'Guest';
}

function logOutUser() {
    localStorage.removeItem('loginInfoSession');

    if (savedInfoSession && savedInfoSession.username) {
        localStorage.removeItem(`favorites_${savedInfoSession.username}`);
    }
    localStorage.setItem('favorites', JSON.stringify([]));

    savedInfoSession = null;

    loginBtn.style.display = "block"; 
    signupBtn.style.display = "block";  
    logoutBtn.style.display = "none";  
    userDisplay.textContent = 'Guest';
    favoriteCount.style.left = "0%";

    updateFavoriteCount();
    renderHouses();
}

logoutBtn.addEventListener('click', logOutUser);
