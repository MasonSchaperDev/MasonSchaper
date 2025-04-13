let homes = [];

fetch('json/homes.json')
.then(response => response.json())
.then(data => {
    homes = data;
    renderFavorites();
});

function renderFavorites() {
    const favoriteContainer = document.getElementById('favorites');
    favoriteContainer.innerHTML = '';

    const favoriteList = JSON.parse(localStorage.getItem("favorites") || []);

    if (favoriteList.length === 0) {
        favoriteContainer.innerHTML = `<p id="empty">Add your favorites here!</p>`;
        document.getElementById('favorites').style.display = 'unset';
        document.getElementById('footer').style.bottom = 0;
        return;
    }

    favoriteList.forEach(houseId => {
        const home = homes.find(p => p.id == houseId);
        if (!home) return;
        const div = document.createElement("div");
        div.classList.add("favorite-item");
        div.innerHTML = `
            <div class="favorites-content">
                <a href="single-house.html?houseId=${home.id}"><img src="${home.image}" alt="${home.type}"/></a>

                <div class="favorite-description-container">
                    <div class="favorite-houses-description">
                        <p class="list-for-sale">Listing for Sale</p>
                        <h3>$${home.price.toLocaleString()}</h3>
                        <div class="details-container">
                            <p><strong>${home.bed}</strong> bed</p>
                            <p><strong>${home.bath}</strong> bath</p>
                            <p><strong>${home.space}</strong> sqft</p>
                        </div>
                        <p class="house-location">${home.location}</p>
                    </div>
                    <button onclick="removeFromFavorites(${houseId})">Remove</button>
                </div>
            </div>
        `;
        favoriteContainer.appendChild(div);
    });
}

function removeFromFavorites(houseId) {
    let favoriteList = JSON.parse(localStorage.getItem("favorites")) || [];
    favoriteList = favoriteList.filter(id => id != houseId);
    
    localStorage.setItem("favorites", JSON.stringify(favoriteList));
    
    renderFavorites();  // Refresh wishlist
    updateFavoriteCount(); // Update count
}

function updateFavoriteCount() {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const countElement = document.getElementById("favorite-count");

    if (countElement) {
        countElement.textContent = favorites.length;
    }
}   

updateFavoriteCount();
renderFavorites();

// this handles all of the STATE for logins
const savedInfo = JSON.parse(localStorage.getItem('loginInfo'));
const userDisplay = document.getElementById('user');
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const logoutBtn = document.getElementById('logout-btn');
const favoriteCount = document.getElementById('favorite-count');

if (savedInfo && savedInfo.username) {
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
    
    loginBtn.style.display = "unset";
    signupBtn.style.display = "unset";

    if(favoriteCount) {
        favoriteCount.style.right = "10%";
    }
    logoutBtn.style.display = "none";
}
    
logoutBtn.addEventListener('click', logOutUser);