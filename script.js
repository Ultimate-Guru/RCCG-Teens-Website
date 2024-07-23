document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal().reveal('header', {
        distance: '80px',
        duration: 2000,
        delay: 200,
        origin: 'top'
    });

    ScrollReveal().reveal('section.my-8.container.mx-auto', {
        distance: '80px',
        duration: 2000,
        delay: 200,
        origin: 'bottom'
    });

    ScrollReveal().reveal('footer', {
        distance: '80px',
        duration: 2000,
        delay: 200,
        origin: 'top'
    });

    // Display testimonials on page load
    displayTestimonials();

    // Add keydown event listener for the textarea
    const testimonialTextarea = document.getElementById('testimonialText');
    testimonialTextarea.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent default Enter key behavior (new line)
            submitTestimonial();
        }
    });
});

// Function to submit a testimonial
function submitTestimonial() {
    const testimonialText = document.getElementById('testimonialText').value;
    if (testimonialText.trim() === "") {
        alert("Please write something in the Testimony Section.");
        return;
    }

    const currentDate = new Date();
    const timestamp = currentDate.toLocaleString();
    const testimonial = {
        text: testimonialText,
        date: timestamp
    };

    // Save testimonial to localStorage
    let testimonials = JSON.parse(localStorage.getItem('testimonials')) || [];
    testimonials.push(testimonial);
    localStorage.setItem('testimonials', JSON.stringify(testimonials));

    // Clear the textarea
    document.getElementById('testimonialText').value = "";

    // Display the updated testimonials
    displayTestimonials();
}