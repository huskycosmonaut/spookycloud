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