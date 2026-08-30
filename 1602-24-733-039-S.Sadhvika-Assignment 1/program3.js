
document.getElementById("studentForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let studentId = document.getElementById("studentId").value.trim();
    let name = document.getElementById("name").value.trim();
    let dob = document.getElementById("dob").value;
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let branch = document.getElementById("branch").value;
    let semester = document.getElementById("semester").value;
    let address = document.getElementById("address").value.trim();
    let password = document.getElementById("password").value;

    let gender = document.querySelector(
        'input[name="gender"]:checked'
    );

    let valid = true;

    document.querySelectorAll(".error").forEach(function(error) {
        error.textContent = "";
    });

    document.getElementById("success").style.display = "none";

    if (studentId === "") {
        document.getElementById("studentIdError").textContent =
            "Student ID is required.";
        valid = false;
    }

    if (name === "") {
        document.getElementById("nameError").textContent =
            "Name is required.";
        valid = false;
    } else if (!/^[A-Za-z ]+$/.test(name)) {
        document.getElementById("nameError").textContent =
            "Name should contain only letters.";
        valid = false;
    }

    if (dob === "") {
        document.getElementById("dobError").textContent =
            "Date of birth is required.";
        valid = false;
    }

    if (!gender) {
        document.getElementById("genderError").textContent =
            "Please select your gender.";
        valid = false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        document.getElementById("emailError").textContent =
            "Email is required.";
        valid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent =
            "Enter a valid email address.";
        valid = false;
    }

    let mobilePattern = /^[0-9]{10}$/;

    if (mobile === "") {
        document.getElementById("mobileError").textContent =
            "Mobile number is required.";
        valid = false;
    } else if (!mobilePattern.test(mobile)) {
        document.getElementById("mobileError").textContent =
            "Enter a valid 10-digit mobile number.";
        valid = false;
    }

    if (branch === "") {
        document.getElementById("branchError").textContent =
            "Please select a branch.";
        valid = false;
    }

    if (semester === "") {
        document.getElementById("semesterError").textContent =
            "Please select a semester.";
        valid = false;
    }

    if (address === "") {
        document.getElementById("addressError").textContent =
            "Address is required.";
        valid = false;
    }

    if (password === "") {
        document.getElementById("passwordError").textContent =
            "Password is required.";
        valid = false;
    } else if (password.length < 6) {
        document.getElementById("passwordError").textContent =
            "Password must contain at least 6 characters.";
        valid = false;
    }

    if (valid) {
        document.getElementById("success").style.display = "block";
        document.getElementById("success").textContent =
            "Student registration successful!";
        document.getElementById("studentForm").reset();
    }

});
