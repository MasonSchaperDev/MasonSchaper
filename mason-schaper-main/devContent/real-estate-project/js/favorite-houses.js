// ============================
// Favorites & Session Management
// ============================

let homes = [];

fetch('json/homes.json')
  .then(response => response.json())
  .then(data => {
    homes = data;
    renderFavorites();

    if (document.getElementById('homes')) {
      renderHouses();
    }
  });

function getFavoritesKey() {
  const loginSession = localStorage.getItem('loginInfoSession');
  if (loginSession) {
    try {
      const sessionData = JSON.parse(loginSession);
      if (sessionData && sessionData.username) {
        return `favorites_${sessionData.username}`;
      }
    } catch (e) {
      console.error("Error parsing loginInfoSession:", e);
    }
  }
  return 'favorites';
}

function renderFavorites() {
  const favoriteContainer = document.getElementById('favorites');
  if (!favoriteContainer) return;
  favoriteContainer.innerHTML = '';

  const favoriteList = JSON.parse(localStorage.getItem(getFavoritesKey()) || '[]');

  if (favoriteList.length === 0) {
    favoriteContainer.innerHTML = `<p id="empty">Add your favorites here!</p>`;
    favoriteContainer.style.display = 'unset';
    const footer = document.getElementById('footer');
    if (footer) footer.style.bottom = 0;
    return;
  }

  favoriteList.forEach(houseId => {
    const home = homes.find(p => p.id == houseId);
    if (!home) return;

    const div = document.createElement("div");
    div.classList.add("favorite-item");
    div.innerHTML = `
      <div class="favorites-content">
        <a href="single-house.html?houseId=${home.id}">
          <img src="${home.image}" alt="${home.type}"/>
        </a>
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
  let favoriteList = JSON.parse(localStorage.getItem(getFavoritesKey()) || '[]');
  favoriteList = favoriteList.filter(id => id != houseId);
  localStorage.setItem(getFavoritesKey(), JSON.stringify(favoriteList));

  renderFavorites();
  updateFavoriteCount();
}

function updateFavoriteCount() {
  const favorites = JSON.parse(localStorage.getItem(getFavoritesKey()) || '[]');
  const countElement = document.getElementById("favorite-count");
  if (countElement) {
    countElement.textContent = favorites.length;
  }
}

updateFavoriteCount();
renderFavorites();

function renderHouses(houseList = homes) {
  const homeList = document.getElementById('homes');
  if (!homeList) return;
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
  const searchEl = document.getElementById("search");
  if (!searchEl) return;
  const searchTerm = searchEl.value.toLowerCase();
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

const searchElement = document.getElementById('search');
if (searchElement) {
  searchElement.addEventListener("input", filterHouses);
}
updateFavoriteCount();

// ============================
// Logout & UI Buttons Management
// ============================

const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const logoutBtn = document.getElementById('logout-btn');
const userDisplay = document.getElementById('user');

function updateUIForSession() {
    const sessionStr = localStorage.getItem('loginInfoSession');
    console.log("Raw loginInfoSession:", sessionStr);
    let sessionData = null;
    if (sessionStr) {
      try {
        sessionData = JSON.parse(sessionStr);
      } catch (e) {
        console.error("Error parsing loginInfoSession", e);
      }
    }
    
    // Define favoriteCount safely.
    const favoriteCount = document.getElementById('favorite-count');
    
    if (sessionData && sessionData.username) {
      userDisplay.textContent = sessionData.username;
      loginBtn.style.display = "none";
      signupBtn.style.display = "none";
      logoutBtn.style.display = "block"; 
      if (favoriteCount) favoriteCount.style.right = "15%";
    } else {
      userDisplay.textContent = "Guest";
      loginBtn.style.display = "block";
      signupBtn.style.display = "block";
      logoutBtn.style.display = "none";
      if (favoriteCount) favoriteCount.style.right = "10%";
    }
  }
  

updateUIForSession();

function logOutUser() {
  console.log("Logging out...");
  localStorage.removeItem('loginInfoSession');
  localStorage.setItem('favorites', JSON.stringify([]));

  updateUIForSession();
  updateFavoriteCount();
  renderFavorites();
  if (document.getElementById('homes')) {
    renderHouses();
  }

  window.location.href = "index.html"; 
}

if (logoutBtn) {
  logoutBtn.addEventListener('click', logOutUser);
}
