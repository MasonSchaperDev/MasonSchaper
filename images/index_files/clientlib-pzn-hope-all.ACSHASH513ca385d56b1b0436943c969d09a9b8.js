function getCookie(name) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.startsWith(nameEQ)) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

const cookieStatus = getCookie('isSignedOn');
// Define the global object if it doesn't already exist
var $kp = $kp || {};
$kp.pzn = $kp.pzn || {};

function getUserProfile() {
    const userProfileUri = jsonConfigs.global.hopeUserProfileApi;
    console.log("Inside js value of userProfileUri====" + userProfileUri);

    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.addEventListener("readystatechange", function() {
            if (this.readyState === 4) {
                if (this.status >= 200 && this.status < 300) {
                    try {
                        const responseJson = JSON.parse(this.responseText);
                        resolve(responseJson);
                    } catch (e) {
                        reject(new Error("Failed to parse response JSON"));
                    }
                } else {
                    reject(new Error("Request failed with status: " + this.status));
                }
            }
        });
        xhr.open("GET", userProfileUri);
        xhr.send();
    });
}

if(cookieStatus){
	console.log("Login cookie status: " + cookieStatus);
	// Assign the user profile to the global object
	getUserProfile().then(userProfile => {
		$kp.pzn.userProfile = userProfile;
		console.log($kp.pzn.userProfile);
	}).catch(error => {
		console.error("Error fetching user profile:", error);
	});
} else {
	console.log("Login cookie status: " + cookieStatus);
}
