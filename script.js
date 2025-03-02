document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navbar links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll to Contact section when CTA button is clicked
    document.querySelector('.cta').addEventListener('click', function () {
        document.getElementById('contact').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Form validation
    document.querySelector('form').addEventListener('submit', function (event) {
        const name = document.querySelector('input[type="text"]').value.trim();
        const email = document.querySelector('input[type="email"]').value.trim();
        const message = document.querySelector('textarea').value.trim();

        if (name === "" || email === "" || message === "") {
            event.preventDefault();
            alert("Please fill in all fields before submitting.");
        }
    });
});
