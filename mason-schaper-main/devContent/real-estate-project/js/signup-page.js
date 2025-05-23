// what if the user already exists.

document.addEventListener('DOMContentLoaded', () => {
    const registerBtn = document.getElementById('register');

    function updateFavoriteCount() {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        const countElement = document.getElementById("favorite-count");
    
        if (countElement) {
            countElement.textContent = favorites.length;
        }
    }   
    
    updateFavoriteCount();    
    
    registerBtn.addEventListener('click', (event) => {
        event.preventDefault();

        const username = document.getElementById('regUsername').value;
        const password = document.getElementById('regPassword').value;
        
        if (username && password) {
            const userData = {username, password};
            localStorage.setItem('loginInfo', JSON.stringify(userData));
            localStorage.setItem('loginInfoSession', JSON.stringify(userData));

            document.getElementById('regResult').textContent = 'Registered Successfully.';
            document.getElementById('regResult').style.color = 'green';
            const favoriteList = JSON.parse(localStorage.getItem("favorites") || []);
            favoriteList.length === 0;
            const countElement = document.getElementById("favorite-count");
            countElement.textContent = favoriteList.length;
            setTimeout(() => {
                window.location.href = "index.html";
            }, 2000);
        } else {
            document.getElementById('regResult').textContent = 'Please fill in all fields correctly.'
            document.getElementById('regResult').style.color = 'red';
        }
    });
});