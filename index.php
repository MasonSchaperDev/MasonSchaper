<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/styles.css">
    <title>Kaiser Permanente</title>
</head>

<body>
    <?php include 'header.php';?>

<!--today's suggestions-->
    <div class="container-4">
        <img src="images/friends-sitting-on-a-mountain.png" class="friends-sitting">
        <div class="todays-suggestions">
            <h2>Today's suggestions:</h2>
                <button>COVID-19 vaccine</button>
                <button>Medicaid renewal</button> <br>
                <button>Find a doctor</button>
                <button>Mental health services</button> <br>
                <button>Pharmacy</button>
                <button>Shop plans</button> 
        </div>
    </div>
<!--more resources-->
    <div class="container-5">
        <h2 class="more-resources"><img src="images/more-resources.svg">More Resources</h2>
    </div>
<!-- explore resources-->
    <div class="container-6">
        <p>Explore a wide range of apps, podcasts, articles, and resources to help you thrive in mind, body, and spirit.
        </p>
    </div>

    <div class="container-7">

        <div class="column-container">
            <div class="column">
                <img src="images/group-of-people-putting-a-plant-in-soil.png">
                <h4>Community</h4>
                <h2>Celebrate Earth Day every day</h2>
                <p>Every action counts as we address climate change and its impact on health. Lets take steps together
                    for a healthy environment for all.</p>
            </div>
        </div>

        <div class="column-container">
            <div class="column">
                <img src="images/people-sitting-in-a-circle-l-dt.png">
                <h4>Mental health</h4>
                <h2>Supporting your teenager's mental health</h2>
                <p>Handling mental health with your teen can be challenging. Discover resources to help you and your child find a path to wellness.</p>
            </div>
        </div>

        <div class="column-container">
            <div class="column">
                <img src="images/member-ordering-a-prescription-on-their-phone-at-home.png">
                <h4>Pharmacy</h4>
                <h2>Manage your pharmacy expenses</h2>
                <p>Sign in and use our convenient drug cost estimator to view expenses, download reports for taxes, and more.</p>
            </div>
        </div>

        <div class="column-container">
            <div class="column">
                <img src="images/person-using-a-tablet.png">
                <h4>Social health</h4>
                <h2>Get resources you need</h2>
                <p>Good health is more than just health care. Browse resources for food, housing, and more to help you
                    thrive in all aspects of your well-being.</p>
            </div>
        </div>

    </div>
<!--encyclopedia-->
    <div class="container-8">
        <div class="column-encyclopedia-container">
            <div id="child-container-8">
                <h1 id="icon-desc">Health conditions from A to Z</h1>
                <button id="browse-button">Browse the Health Encyclopedia</button>
            </div>
            
            <div id="child-container-8">
                <img src="images/hourglass.svg" class="magnifying-glass-icon">
            </div>
        </div>

        <div class="column-encyclopedia-container">
            <div id="child-container-8">
                <h1 id="icon-desc">Learn more about your medicine</h1>
                <button id="browse-button">Browse the Drug Encyclopedia</button>
            </div>
        
            <div id="child-container-8">
                <img src="images/drugs-icons.svg" class="magnifying-glass-icon">
            </div>
        </div>
    </div>
<!--logo-->
    <div class="container-9">
        <img src="images/kp-logo-white.png" class="kp-logo-mini">
    </div>
<!--footer-->
    <div class="container-footer">
        <div class="column-group">
            <div id="column-of-info">
                <ul id="list-of-info">
                    <li>Accessibility</li><br>
                    <li>Nondiscrimination</li><br>
                    <li>Help in your Language</li>
                </ul>
            </div>

            <div id="column-of-info">
                <ul id="list-of-info">
                    <li>Website Privacy</li><br>
                    <li>HIPAA Notice of Privacy Practices</li><br>
                    <li>Terms & Conditions</li>
                </ul>
            </div>

            <div id="column-of-info">
                <ul id="list-of-info">
                    <li>Rights & Responsibilities</li><br>
                    <li>Disaster Planning</li><br>
                    <li>Technical Information</li>
                </ul>
            </div>

            <div id="column-of-info">
                <ul id="list-of-info">
                    <li>Site Map</li><br>
                    <li>Contact Site Manager</li><br>
                    <li>HIPAA Authorization</li>
                </ul>
            </div>
        </div>

        <div class="container-footer-child">
            <p class="follow-us">Follow us on these external social media sites that will open in a new browser window.
            </p>
            <div class="social-media-icons">
                <img src="images/twitter-white.svg" id="sm-icon">
                <img src="images/facebook-white.svg" id="sm-icon">
                <img src="images/youtube-white.svg" id="sm-icon">
                <img src="images/pinterest-white.svg" id="sm-icon">
                <img src="images/instagram-white.svg" id="sm-icon">
            </div>
            <p class="about-kp"></p>
        </div>
    </div>

    <script>
        function toggleMobileMenu(menu) {
            menu.classList.toggle('open');
        }
    </script>
</body>
</html>