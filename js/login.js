var loggedIn = false;
var loginAttempts = 0;

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const forgottenPassword = document.getElementById("forgot-password");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value.trim().toLowerCase();
    const password = loginForm.password.value.toLowerCase();

    if (username === atob("YnJ1Y2VAdGlsbGluZ2hhc3Rvcmdhbml6YXRpb24uY29t") && password === atob("cGluZWFwcGxl")) {
        // alert("You have successfully logged in.");
        document.getElementById('id01').style.display = 'none';
        loggedIn = true;
        var now = new Date();
        var time = now.getTime();
        time += 3600 * 1000;
        now.setTime(time);
        document.cookie="username=bruce; expires="+now.toUTCString()+";";
        document.getElementById('page-content').style.display ='block';

    } else {
        loginErrorMsg.style.opacity = 1;
        loginAttempts++;
        if (loginAttempts > 2) {
            forgottenPassword.style.opacity = 1;
        }
    }
})
