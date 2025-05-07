//Event Handling: Button Click
const button = document.getElementById("click-btn");
button.addEventListener("click", () => {
    alert("Button clicked!");
    });

//Event Handling: Hover Effects
const hoverElement = document.getElementById("hover-element");
hoverElement.addEventListener("mouseover", () => {
    hoverElement.style.backgroundColor = "lightblue";
});
hoverElement.addEventListener("mouseout", () => {
    hoverElement.style.backgroundColor = "";   
});    

//Event Handling: Keypress Detection
document.addEventListener("keydown", (event) => {
    console.log(`Key pressed: ${event.key}`);
});

//Event Handling: long Press / Double Click
let pressTimer;
const secretElement = document.getElementById("secret-element");
secretElement.addEventListener("mousedown", () => {
    pressTimer = setTimeout(() => {
        alert("Long press detected!");
    }, 1000); // 1 second long press
});
secretElement.addEventListener("mouseup", () => {
    clearTimeout(pressTimer);
});

//Image Gallery (slideshow)
const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
let currentImageIndex = 0;

document.getElementById("next-btn").addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById("slideshow-img").src = images[currentImageIndex]; // Corrected ID
});

//Tabs / Accordion
const tabs = document.querySelectorAll(".tab-button"); // Corrected class
tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const targetTab = document.getElementById("tab-" + tab.dataset.tab); // Corrected dataset reference
        document.querySelectorAll(".tab-content").forEach(content => content.style.display = "none");
        targetTab.style.display = "block";
    });
});

//Form Validation: Required field check
const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
    const name = document.getElementById("name").value;
    if (name === "") {
        event.preventDefault(); // Prevent form submission
        alert("Name is required!");
    }
});

//Form Validation: Email format check
const emailfield = document.getElementById("email");
emailfield.addEventListener("input", () => {
    const email = emailfield.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailfield.setCustomValidity("Invalid email format");
    } else {
        emailfield.setCustomValidity("");
    }
});

//Form Validation: Password strength check
const passwordField = document.getElementById("password");
passwordField.addEventListener("input", () => {
    if (passwordField.value.length < 8) {
        passwordField.setCustomValidity("Password must be at least 8 characters long");
    } else {
        passwordField.setCustomValidity("");
    }
});

// Password Progress Bar
const passwordProgress = document.getElementById("password-progress");

passwordField.addEventListener("input", () => {
    const strength = Math.min(passwordField.value.length * 10, 100);
    passwordProgress.style.width = strength + "%";
    if (strength < 50) {
        passwordProgress.style.backgroundColor = "red";
    } else if (strength < 80) {
        passwordProgress.style.backgroundColor = "orange";
    } else {
        passwordProgress.style.backgroundColor = "green";
    }
});

//Real-Time Feedback for username
const usernameField = document.getElementById("username");
const feedback = document.getElementById("username-feedback");

usernameField.addEventListener("input", () => {
    if (usernameField.value.length < 3) {
        feedback.textContent = "Username is too short";
        feedback.style.color = "red";
    } else {
        feedback.textContent = "Username looks good!";
        feedback.style.color = "green";
    }    
});

// Dynamic Greeting
const greeting = document.getElementById("greeting");
const hours = new Date().getHours();
if (hours < 12) {
    greeting.textContent = "Good Morning!";
} else if (hours < 18) {
    greeting.textContent = "Good Afternoon!";
} else {
    greeting.textContent = "Good Evening!";
}