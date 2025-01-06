document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Example credentials (in a real app, use a secure authentication system)
    if (username === "123" && password === "123") {
        window.location.href = "main.html";  // Redirect to the math demo page
    } else {
        document.getElementById("error").style.display = "block";
    }
});
