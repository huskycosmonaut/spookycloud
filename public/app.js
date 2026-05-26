// Grab all navigation buttons and all application pages
const navButtons = document.querySelectorAll('.nav-btn');
const pages = document.querySelectorAll('.app-page');

navButtons.forEach(button => {
    button.addEventListener('click', () => {
        // 1. Remove the "active" highlight color from all buttons
        navButtons.forEach(btn => btn.classList.remove('active'));
        
        // 2. Add the "active" highlight to the clicked button
        button.classList.add('active');

        // 3. Hide all pages completely
        pages.forEach(page => page.classList.add('hidden'));

        // 4. Find the target page ID and unhide it
        const targetPageId = button.getAttribute('data-target');
        const targetPage = document.getElementById(targetPageId);
        targetPage.classList.remove('hidden');
    });
});
// Age Gate Placeholder Logic
const ageGate = document.getElementById('age-gate');
const verifyBtn = document.getElementById('verify-submit-btn');
const idInput = document.getElementById('id-upload-input');

verifyBtn.addEventListener('click', () => {
    // In a production app, this would check the API signal.
    // For this UI mockup, we confirm an option is selected.
    if (idInput.files.length === 0) {
        alert("Please select a sample mock image file to proceed with the UI demonstration.");
        return;
    }
    
    // Smoothly hide the verification screen
    ageGate.classList.add('hidden');
});