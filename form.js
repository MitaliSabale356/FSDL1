var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirmPassword");
var strengthBar = document.getElementById("strengthBar");
var strengthText = document.getElementById("strengthText");

// LIVE PASSWORD CHECK
password.addEventListener("keyup", function () {

    var passValue = password.value;
    var strength = 0;

    if (passValue.length >= 8) strength++;
    if (/[A-Z]/.test(passValue)) strength++;
    if (/[\W_]/.test(passValue)) strength++;

    if (strength === 0) {
        strengthBar.style.width = "0%";
        strengthText.innerHTML = "";
        password.style.border = "2px solid red";
    }
    else if (strength === 1) {
        strengthBar.style.width = "33%";
        strengthBar.style.background = "red";
        strengthText.innerHTML = "Weak";
        password.style.border = "2px solid red";
    }
    else if (strength === 2) {
        strengthBar.style.width = "66%";
        strengthBar.style.background = "orange";
        strengthText.innerHTML = "Medium";
        password.style.border = "2px solid orange";
    }
    else if (strength === 3) {
        strengthBar.style.width = "100%";
        strengthBar.style.background = "green";
        strengthText.innerHTML = "Strong";
        password.style.border = "2px solid green";
    }
});


// LIVE CONFIRM PASSWORD MATCH
confirmPassword.addEventListener("keyup", function () {

    if (confirmPassword.value === password.value && confirmPassword.value !== "") {
        confirmPassword.style.border = "2px solid green";
    } else {
        confirmPassword.style.border = "2px solid red";
    }

});


// FINAL VALIDATION ON SUBMIT
function validateForm() {

    var username = document.getElementById("username").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var passValue = password.value.trim();
    var confirmValue = confirmPassword.value.trim();
    var message = document.getElementById("message");

    if (username === "" || email === "" || phone === "" || passValue === "" || confirmValue === "") {
        message.innerHTML = "All fields are required!";
        message.style.color = "red";
        return false;
    }

    var phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        message.innerHTML = "Phone must be 10 digits!";
        message.style.color = "red";
        return false;
    }

    var passPattern = /^(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
    if (!passPattern.test(passValue)) {
        message.innerHTML = "Password must be 8 chars, 1 capital & 1 special symbol!";
        message.style.color = "red";
        return false;
    }

    if (passValue !== confirmValue) {
        message.innerHTML = "Passwords do not match!";
        message.style.color = "red";
        return false;
    }

    var emailPattern = /^[a-zA-Z]+@[a-zA-Z]{3}\.[a-zA-Z]{2,3}$/;
    if (!emailPattern.test(email)) {
        message.innerHTML = "Invalid Email format!";
        message.style.color = "red";
        return false;
    }

    message.innerHTML = "Registration Successful!";
    message.style.color = "green";

    document.getElementById("heading").innerHTML = "Welcome " + username;
    document.getElementById("heading").style.color = "blue";

    var newText = document.createTextNode(" You are successfully registered.");
    document.getElementById("extra").appendChild(newText);
}


// jQuery Required Operations

$("#submitBtn").click(function() {
    $(this).text("Submitted");
});

$("body").css("background-image", "linear-gradient(to right, #e3f2fd, #ffffff)");

$("#username").attr("placeholder", "Enter your name");

$("#submitBtn").click(function() {
    var name = $("#username").val();
    console.log("Username: " + name);
});
