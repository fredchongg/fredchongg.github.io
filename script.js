document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Example credentials (in a real app, use a secure authentication system)
    if (username === "user" && password === "password123") {
        window.location.href = "math-demo.html";  // Redirect to the math demo page
    } else {
        document.getElementById("error").style.display = "block";
    }
});
