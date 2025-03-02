document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navbar links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        const ctaButton = document.querySelector(".cta");
    
        setInterval(() => {
            ctaButton.classList.toggle("pulse");
        }, 1500);
    });    

    // Scroll to Contact section when CTA button is clicked
    document.querySelector('.cta').addEventListener('click', function () {
        document.getElementById('contact').scrollIntoView({
            behavior: 'smooth'
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        const toggleButton = document.getElementById("darkModeToggle");
        toggleButton.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
        });
    });

    

    // Form validation
    
        }
    );

