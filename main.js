const userNameButton = document.getElementById("username-button");
const userNameLength = document.getElementById("user-length");
let goodUsername = false;
let goodPassword = false;

let firstInfo = document.getElementById("first-info");
let secondInfo = document.getElementById("second-info");

const switchInfos = function() {
    firstInfo.innerHTML = "username";
    secondInfo.innerHTML = "password";
};


window.setTimeout(switchInfos, 7000);

const checkUsername = function() {
    let username = document.getElementById("username").value;
    if (username.length === 0) {
        userNameLength.textContent = "Please enter a valid username"
    }
    else if (username.length < 9) {
        userNameLength.textContent = "-Username must be at least 10 letters long";
    } else if (username.length > 11) {
        userNameLength.textContent = "-Username cannot be more than 11 letters long";
    } else {
        userNameLength.textContent = "This username is available";
        goodUsername = true; // move this to the end of all the conditionals.
    }
    // add more conditionals here.
    
};

userNameButton.addEventListener("click", checkUsername);

const passwordButton = document.getElementById("password-button");
const passwordLength = document.getElementById("pass-length");

const checkPassword = function() {
    let password = document.getElementById("password").value;
    if (password.length > 8) {
        passwordLength.textContent = "-Password cannot be more than 9 letters long";
    } else if (password.length < 7 && password.length > 0) {
        passwordLength.textContent = "-Password must be at least 8 letters long";
    } else if (password.length === 0){
        passwordLength.textContent = "Please enter a valid password";
    } else {
        passwordLength.textContent = "This password is available";
        goodPassword = true; // move this to the end of all the conditionals.
    }
    // Add more conditionals here.


    if (goodUsername && goodPassword) {
        submitButton.disabled = false;
    }
    

};

passwordButton.addEventListener("click", checkPassword);

const submitButton = document.getElementById("submit");

let count = 0;
const onSubmitButtonClick  = function() {
    count += 1;
    if (count === 1) {
        submitButton.style.left = "30em";
    } else if (count === 2) {
        submitButton.style.left = "6em";
    } else {
        document.body.innerHTML = "<h1 style='text-align: center;'>It worked! Your information is being sent to Pakistan now!</h1>"
    }



    
};

submitButton.addEventListener("click", onSubmitButtonClick);
// Make sure to enable the button!!!!
