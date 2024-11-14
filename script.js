// Define the correct password
const correctPassword = "123";

// Function to check the password
function checkPassword() {
    const input = document.getElementById("passwordInput").value;
    const errorMessage = document.getElementById("errorMessage");

    if (input === correctPassword) {
        // Clear the body and inject the main content dynamically with styling
        document.body.innerHTML = `
            <header>
                <h1>Welcome to Our Page</h1>
                <p>Meet Our Team</p>
            </header>
            <main>
                <section id="about">
                    <div class="team-member">
                        <img src="https://via.placeholder.com/220" alt="Team Member 1">
                        <h3>Frederick Chong Yew Shen</h3>
                        <p>293228</p>
                    </div>
                    <div class="team-member">
                        <img src="https://via.placeholder.com/220" alt="Team Member 2">
                        <h3>Norman Muhammad bin Sumar</h3>
                        <p></p>
                    </div>
                    <div class="team-member">
                        <img src="https://via.placeholder.com/220" alt="Team Member 3">
                        <h3>Alban Heng Yu Cheng</h3>
                        <span>Software Engineer</span>
                        <p>James specializes in backend development, bringing innovative solutions to life.</p>
                    </div>
                    <div class="team-member">
                        <img src="https://via.placeholder.com/220" alt="Team Member 4">
                        <h3>Kee Chin Yuan</h3>
                        <span>Marketing Specialist</span>
                        <p>Linda is an expert in digital marketing and brand building for high growth.</p>
                    </div>
                </section>
            </main>
            <footer>
                <p>&copy; 2024 Your Company. All rights reserved.</p>
            </footer>
        `;

        // Reapply CSS styling to the new content
        document.body.style.display = "block";
        document.body.style.margin = "0";
        document.body.style.fontFamily = "Arial, sans-serif";
        document.body.style.backgroundColor = "#f4f4f4";
    } else {
        errorMessage.textContent = "Incorrect password. Please try again.";
    }
}
