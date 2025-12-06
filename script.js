// Step 3: Basic interactivity

// Toggle navigation menu (hamburger)
function toggleMenu() {
    const nav = document.querySelector("nav ul");
    nav.classList.toggle("show");
}

// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        document.querySelector(targetId).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Step 4: Interactivity for Projects

// Filter projects by category (example categories: insurance, finance)
function filterProjects(category) {
    const projects = document.querySelectorAll("#projects article");
    projects.forEach(project => {
        if (category === "all" || project.dataset.category === category) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    });
}

// Lightbox effect for project images
const images = document.querySelectorAll("#projects img");
images.forEach(img => {
    img.addEventListener("click", () => {
        const modal = document.createElement("div");
        modal.classList.add("lightbox");
        modal.innerHTML = `
            <div class="lightbox-content">
                <img src="${img.src}" alt="${img.alt}">
                <span class="close">&times;</span>
            </div>
        `;
        document.body.appendChild(modal);

        // Close lightbox
        modal.querySelector(".close").addEventListener("click", () => {
            modal.remove();
        });

        // Close on outside click
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    });
});

// Step 5: Form validation
const form = document.querySelector("#contact form");
form.addEventListener("submit", function (e) {
    e.preventDefault();

    let valid = true;
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");

    // Reset previous errors
    document.querySelectorAll(".error").forEach(el => el.remove());

    // Name validation
    if (name.value.trim() === "") {
        showError(name, "Name is required");
        valid = false;
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)) {
        showError(email, "Please enter a valid email");
        valid = false;
    }

    // Message validation
    if (message.value.trim() === "") {
        showError(message, "Message cannot be empty");
        valid = false;
    }

    if (valid) {
        alert("Form submitted successfully!");
        form.reset();
    }
});

// Helper function to show error messages
function showError(input, message) {
    const error = document.createElement("span");
    error.classList.add("error");
    error.style.color = "red";
    error.style.fontSize = "0.9rem";
    error.textContent = message;
    input.insertAdjacentElement("afterend", error);
}
