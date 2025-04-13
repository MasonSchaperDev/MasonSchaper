document.addEventListener('DOMContentLoaded', () => {
    const changePassword = document.getElementById('changePassword');
    
    changePassword.addEventListener('click', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const message = document.getElementById('message');
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
    
        const saved = JSON.parse(localStorage.getItem('loginInfo'));
    
        if (username === saved.username && password === confirmPassword) {
            document.getElementById('message').style.color = 'green';
            message.textContent = 'Changed Password Successfully.';

            const userData = {username, password};
            localStorage.setItem('loginInfo', JSON.stringify(userData)); // it's overwriting everything when I set the password.
            setTimeout(() => {
                window.location.href = "login-page.html";
            }, 2000);   
        } else {
            message.textContent = `Passwords Do Not Match or Username Isn't Registered.`;
            document.getElementById('message').style.color = 'red';
        }
    
    });
});