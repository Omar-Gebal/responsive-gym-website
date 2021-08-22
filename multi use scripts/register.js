const email_field = document.querySelector('#email-field');
const username_field = document.querySelector('#username-field');
const password_field = document.querySelector('#password-field');
const confirm_password_field = document.querySelector('#confirm-password-field');

var email_regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var password_regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

function submitForm(event){ 
    var ok = true;
    if (!email_regex.test(email_field.value)) {
        alert("email is not email"); 
        ok = false;
    }
    if (!password_regex.test(password_field.value)) {
        alert("password must be minimum eight characters and contain at least one uppercase letter, one lowercase letter, one number, and one special character"); 
        ok = false;
    }
    if (password_field.value != confirm_password_field.value) {
        alert("passwords do not match"); 
        ok = false;
    }  
    if (!ok) {
        event.preventDefault();
    }
} 
