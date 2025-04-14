function calculateMortgage() {
    const principal = parseFloat(document.getElementById('loanAmount').value);
    const annualRate = parseFloat(document.getElementById('interestRate').value) / 100;
    const years = parseInt(document.getElementById('loanTerm').value);

    const monthlyRate = annualRate / 12;
    const numberOfYears = years * 12;
    
    if (!principal || !annualRate || !years) {
        document.getElementById('result').textContent = 'Please Fill out the required fields.';
        document.getElementById('result').style.color = 'red';
        return;
    }

    const monthlyPayment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfYears));
    document.getElementById('result').textContent = `Your Monthly Payment: $${monthlyPayment.toFixed(2)}`;
    document.getElementById('result').style.color = 'green';
}

function updateFavoriteCount() {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const countElement = document.getElementById("favorite-count");

    if (countElement) {
        countElement.textContent = favorites.length;
    }
}   

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
    loginBtn.style.display = "none";
    signupBtn.style.display = "none";
    favoriteCount.style.right = "15%";
    logoutBtn.style.display = "unset";
} else {
    userDisplay.textContent = 'Guest';
}

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