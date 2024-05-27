document.addEventListener('DOMContentLoaded', function () {
    // Activate home section initially
    const homeControl = document.querySelector('.control[data-id="home"]');
    if (homeControl) {
        homeControl.classList.add('active-btn');
    }
    // Function to handle navigation and active class toggling
    function navigateToSection(targetId) {
        const targetSection = document.querySelector(targetId);  // Select the corresponding section
        if (targetSection) {
            // Remove 'active' class from all sections and controls
            document.querySelectorAll('.container').forEach(section => {
                section.classList.remove('active');
            });
            document.querySelectorAll('.control').forEach(control => {
                control.classList.remove('active-btn');
            });

            // Add 'active' class to the target section
            targetSection.classList.add('active');
            // Scroll to the target section
            targetSection.scrollIntoAr({
                behavior: 'smooth',
                block: 'start'
            });

            // Find the control that matches the target and activate it
            const correspondingControl = document.querySelector(`.control[data-id="${targetId.substring(1)}"]`);
            if (correspondingControl) {
                correspondingControl.classList.add('active-btn');
            }
        }
    }

    // Handle bottom and side navigation links
    document.querySelectorAll('nav a, .control').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();  // Prevent the default anchor behavior
            const targetId = anchor.tagName === 'A' ? anchor.getAttribute('href') : `#${anchor.dataset.id}`;
            navigateToSection(targetId);
        });
    });

    // Toggle theme
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });
});
