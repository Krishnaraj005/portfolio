document.addEventListener('DOMContentLoaded', () => {
    // Render all icons on the page
    lucide.createIcons();

    // Mobile menu toggle functionality
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Close the mobile menu when a link inside it is clicked
    const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');
    
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu) {
                mobileMenu.classList.add('hidden');
            }
        });
    });
});