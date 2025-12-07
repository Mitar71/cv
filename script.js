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

// Step 4: Interactivity for Projects (ako dodaš #projects sekciju kasnije)

// Filter projects by category
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

// Step 5: Contact section enhancement (copy email to clipboard)
const emailLink = document.querySelector('#contact a[href^="mailto:"]');
if (emailLink) {
    emailLink.addEventListener('click', (e) => {
        e.preventDefault();
        const email = emailLink.getAttribute('href').replace('mailto:', '');
        navigator.clipboard.writeText(email).then(() => {
            alert(`Email address copied: ${email}`);
        });
    });
}