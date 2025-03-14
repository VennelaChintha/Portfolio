var typed = new Typed(".text1", {
    strings: ["Full Stack Developer", "Front-end Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/* form submiition */
(function () {
    emailjs.init("bUnXW6GK62xR11JvN"); // Replace with your EmailJS public key
})();

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    emailjs.send("service_5d07bmt", "template_bjajeo3", {
        from_name: name,
        from_email: email,
        message: message
    }).then(
        function (response) {
            console.log("SUCCESS!", response);
            document.getElementById("confirmation-message").style.display = "block";
            document.getElementById("contact-form").reset();
        },
        function (error) {
            console.log("FAILED...", error);
        }
    );
});

/* project scroll animation */

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".project-card");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show"); // Adds animation
                observer.unobserve(entry.target); // Stops observing after first trigger
            }
        });
    }, { threshold: 0.1 }); // Triggers when 20% of card is visible

    cards.forEach(card => observer.observe(card));
});
