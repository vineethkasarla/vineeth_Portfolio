// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Typing effect for hero
const text = "Welcome to My Portfolio";
let index = 0;
const typingText = document.getElementById('typing-text');

function typeWriter() {
    if (index < text.length) {
        typingText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}
typeWriter();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate progress bars on scroll
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width + '%';
    });
}

// Counter animation
function animateCounter(element, target) {
    let count = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        count += increment;
        if (count >= target) {
            count = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(count);
    }, 30);
}

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.id === 'skills') {
                animateProgressBars();
            }
            if (entry.target.id === 'experience') {
                const counter = document.getElementById('years-counter');
                if (counter.textContent === '0') {
                    animateCounter(counter, 3);
                }
            }
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Initial styles for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s, transform 0.5s';
});

// Modal functionality
function openModal(project) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    if (project === 'qfund') {
        modalBody.innerHTML = `
            <h2>Qfund</h2>
            <p>Qfund is a financial high-end web application that helps micro financing companies to expand their existing business procedures of lending different types of loans to their customers with respect to their state level rules and regulations. Qfund contains and handles all the features related to customer information including the borrowers loans and receipts and mostly important is securing their confidential data like ssn, banking details. Qfund connects interested persons with a third-party lender.</p>
            <p><strong>Responsibilities:</strong></p>
            <ul>
                <li>Designed and Developed Reports with respect to the client requirement.</li>
                <li>Deployed the builds in Test/UAT environment.</li>
                <li>Communicating with functional consultants to take requirements.</li>
                <li>Understanding and analysing the requirements.</li>
                <li>Developing the functionality as per the Client Requirements.</li>
                <li>Reporting on progress/issues to management.</li>
            </ul>
        `;
    }
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}