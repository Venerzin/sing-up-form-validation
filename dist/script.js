"use strict";
var warningEl = document.querySelector('.c-free-trial__warning');
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function handleSubmit(e) {
    var validFirstName = false;
    var validLastName = false;
    var validEmail = false;
    var validPassword = false;
    var firstNameEl = document.querySelector("#first-name");
    var lastNameEl = document.querySelector("#last-name");
    var emailEl = document.querySelector("#email");
    var passwordEl = document.querySelector("#password");
    if (firstNameEl) {
        validFirstName = nameValidation(firstNameEl.value);
    }
    if (lastNameEl) {
        validLastName = nameValidation(lastNameEl.value);
    }
    if (emailEl) {
        validEmail = emailRegex.test(emailEl.value);
    }
    if (passwordEl) {
        validPassword = passwordValidation(passwordEl.value);
    }
    if (validFirstName) {
        displayWarning('');
        if (validLastName) {
            if (validEmail) {
                if (validPassword) {
                }
                else {
                    displayWarning('Password require a min of 8 characters!');
                    e.preventDefault();
                    passwordEl === null || passwordEl === void 0 ? void 0 : passwordEl.focus();
                }
            }
            else {
                displayWarning("Please enter a valid email!");
                e.preventDefault();
                emailEl === null || emailEl === void 0 ? void 0 : emailEl.focus;
            }
        }
        else {
            displayWarning('Please enter a last name!');
            e.preventDefault();
            lastNameEl === null || lastNameEl === void 0 ? void 0 : lastNameEl.focus();
        }
    }
    else {
        displayWarning('Please enter a first name!');
        e.preventDefault();
        firstNameEl === null || firstNameEl === void 0 ? void 0 : firstNameEl.focus();
    }
}
function nameValidation(name) {
    if (name.length > 0) {
        return true;
    }
    return false;
}
function passwordValidation(password) {
    if (password.length >= 8) {
        return true;
    }
    return false;
}
function displayWarning(warning) {
    if (warningEl) {
        warningEl.innerHTML = warning;
    }
}
