document.addEventListener('DOMContentLoaded', () => {
    const houseList = document.getElementById('home-list');
    const houseTitle = document.getElementById('home-title');

    let homes = [];
    
    loadHome();
    updateFavoriteCount();

    fetch('json/homes.json')
    .then(response => response.json())
    .then(data => {
        homes = data;
        loadHome();
    });

    function getHouseFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('houseId');
    }

    function loadHome() {
        houseList.innerHTML = ''; // Clear previous content
        
        const houseId = getHouseFromUrl();

        if (!houseId) {
            homeTitleElement.textContent = "home Not Found";
            homeListings.innerHTML = `<p>No home ID provided.</p>`;
            return;
        }

        const home = homes.find(home => home.id == houseId);

        if (home) {
            document.title = `${home.title}`;

            houseTitle.textContent = home.title;

            const houseElement = document.createElement('div');
            houseElement.classList.add('single-home');
            houseElement.innerHTML = `
                <img src="${home.image}" class="single-house-img"/></a>
                
                <div class="single-house-description-container">
                    <div class="single-house-description">
                        <p class="list-for-sale">Listing for Sale</p>
                        <h3>$${home.price.toLocaleString()}</h3>
                        <div class="details-container">
                            <p><strong>${home.bed}</strong> bed</p>
                            <p><strong>${home.bath}</strong> bath</p>
                            <p><strong>${home.space}</strong> sqft</p>
                        </div>
                        <p class="house-location">${home.location}</p>
                    </div>

                    <a href="index.html">Back to Home</a>
                </div>
            `;

            houseList.appendChild(houseElement);
        } else {
            houseTitle.textContent = "home Not Found";
            houseList.innerHTML = `<p>No home found. Please check the home ID.</p>`;
        }
    }

    function updateFavoriteCount() {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        document.getElementById("favorite-count").textContent = favorites.length;
    }   

    // this handles all of the STATE for logins
    const savedInfo = JSON.parse(localStorage.getItem('loginInfo'));
    const savedInfoSession = JSON.parse(localStorage.getItem('loginInfoSession'));
    const userDisplay = document.getElementById('user');
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const favoriteCount = document.getElementById('favorite-count');

    if (savedInfoSession && savedInfoSession.username) {
        loginBtn.style.display = "none";
        signupBtn.style.display = "none";
        favoriteCount.style.right = "15%";
        logoutBtn.style.display = "unset";
    } else {
        userDisplay.style.display = 'none';
    }

    function logOutUser() {
        const loginBtn = document.getElementById('login-btn');
        const signupBtn = document.getElementById('signup-btn');
        const favoriteCount = document.getElementById('favorite-count');
        const logoutBtn = document.getElementById('logout-btn');

        localStorage.removeItem('loginInfoSession');
        loginBtn.style.display = "unset";
        signupBtn.style.display = "unset";

        if(favoriteCount) {
            favoriteCount.style.right = "10%";
        }

        logoutBtn.style.display = "none";
    }

    logoutBtn.addEventListener('click', logOutUser);
});