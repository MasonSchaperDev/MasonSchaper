document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login');
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    function updateFavoriteCount() {
        document.getElementById("favorite-count").textContent = favorites.length;
    }   
    
    updateFavoriteCount();

    loginBtn.addEventListener('click', (event) => {
        event.preventDefault();
        
        const message = document.getElementById('message');
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const saved = localStorage.getItem('loginInfo');
        const savedSession = localStorage.getItem('loginInfoSession');

        if (!saved || saved === '') {
            message.textContent = 'No Registered Users Found';
            document.getElementById('message').style.color = 'red';
            return;
        }

        const savedInfo = JSON.parse(saved);

        if (username === savedInfo.username && password === savedInfo.password) {
            document.getElementById('message').textContent = 'Logged in Successfully.';
            document.getElementById('message').style.color = 'green';
            localStorage.setItem("favorites", []) || [];
            const userData = {username, password};
            localStorage.setItem('loginInfoSession', JSON.stringify(userData));
            setTimeout(() => {
                window.location.href = "index.html";
            }, 2000);
        } else {
            message.textContent = 'Incorrect Username or Password';
            document.getElementById('message').style.color = 'red';
        }
    });
});