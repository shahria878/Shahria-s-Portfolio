const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});





document.addEventListener("DOMContentLoaded", () => {
    const contactSection = document.querySelector('.contact-section');
    const contactBtn = document.querySelector('.contact-btn');
    const contactDropdown = document.querySelector('.contact-dropdown');

    const helpSection = document.querySelector('.help-section');
    const helpBtn = document.querySelector('.help-btn');
    const helpDropdown = document.querySelector('.help-dropdown');

    // Function to close both dropdowns
    function closeDropdowns() {
        contactSection.classList.remove('active');
        helpSection.classList.remove('active');
    }

    // Toggle contact dropdown
    contactBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        closeDropdowns(); // Close all dropdowns first
        contactSection.classList.toggle('active'); // Then toggle the clicked one
    });

    // Toggle help dropdown
    helpBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        closeDropdowns(); // Close all dropdowns first
        helpSection.classList.toggle('active'); // Then toggle the clicked one
    });

    // Hide dropdown if clicked outside
    document.addEventListener('click', () => {
        closeDropdowns();
    });

    // Prevent dropdown from closing when clicking inside
    contactDropdown.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    helpDropdown.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});





