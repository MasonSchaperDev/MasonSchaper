// what if the user already exists.

document.addEventListener('DOMContentLoaded', () => {
    const registerBtn = document.getElementById('register');
    
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
            setTimeout(() => {
                window.location.href = "index.html";
            }, 2000);
        } else {
            document.getElementById('regResult').textContent = 'Please fill in all fields correctly.'
            document.getElementById('regResult').style.color = 'red';
        }
    });
});