
<!--top-menu-->
    <div class="container">
        <nav class="nav-bar">
            <div class="drop-down-menus">
                <label for="regions">Region</label>
                <select name="regions" id="menu">
                    <option value="S.California">S.California</option>
                    <option value="N.California">N.California</option>
                    <option value="Northwest">Northwest</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Mid-Atlantic">Mid-Atlantic</option>
                    <option value="Hawaii">Hawaii</option>
                    <option value="Colorado">Colorado</option>
                </select>

                <label for="Language">Language</label>
                <select name="languages" id="menu">
                    <option value="english">English</option>
                    <option value="spanish">Spanish</option>
                </select>
            </div>

            <div class="employers-and-brokers">
                <ul>
                    <li><a href="#" id="underline-link">Employers</a></li>
                    <img src="images/open-new-window.svg" id="window-icon">
                    <li><a href="#" id="underline-link">Brokers</a></li>
                    <img src="images/open-new-window.svg" id="window-icon">
                </ul>
            </div>
        </nav>
    </div>
<!--sign-up/log-in-->     
    <div class="container-2">
        <img src="images/kp-logo-white.png" id="logo">
        <div class="login-options">
            <button class="register">Register</button>
            <button class="sign-in"><img src="images/profile-circle.svg" class="profile-icon">Sign In</button>
        </div>
    </div>
<!--list of options-->
    <div class="container-3">
        <div class="option-list">
            <ul>
                <li><a href="#" id="white-hover-link">Learn</a></li>
                <li><a href="shop-plans.html" id="white-hover-link">Shop Plans</a></li>
                <li><a href="#" id="white-hover-link">Doctors & Locations</a></li>
                <li><a href="#" id="white-hover-link">Health & Wellness</a></li>
                <li><a href="#" id="white-hover-link">Get Care</a></li>
                <li><a href="#" id="white-hover-link">Pay Bills</a></li>
            </ul>
        </div>

        <div id="hamburger-icon" onclick="toggleMobileMenu(this)">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
            <ul class="mobile-menu">
                <li><a href="#">Learn</a></li>
                <li><a href="#">Shop Plans</a></li>
                <li><a href="#">Doctors & Locations</a></li>
                <li><a href="#">Health & Wellness</a></li>
                <li><a href="#">Get Care</a></li>
                <li><a href="#">Pay Bills</a></li>
            </ul>
        </div>

        <div class="search-container">
            <input type="text" placeholder="Explore topics, care, coverage" class="search-bar">
            <button class="search-button">Search</button>
            <button class="search-button-mobile">Search</button>
        </div>
    </div>