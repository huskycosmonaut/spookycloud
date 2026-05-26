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
// ==========================================
// SOCIAL INTERACTION LOGIC (FEED PAGE)
// ==========================================

// 1. Follow Button Toggle Engine
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('follow-btn')) {
        const btn = e.target;
        
        if (!btn.classList.contains('following')) {
            btn.classList.add('following');
            btn.textContent = 'Following';
            console.log(`You followed ${btn.getAttribute('data-user')}`);
        } else {
            btn.classList.remove('following');
            btn.textContent = 'Follow';
            console.log(`You unfollowed ${btn.getAttribute('data-user')}`);
        }
    }
});

// 2. Like Button Click Engine
document.addEventListener('click', (e) => {
    // Find if the click happened on a like button or its nested text/emoji
    const likeBtn = e.target.closest('.like-btn');
    if (!likeBtn) return;

    const likeCountSpan = likeBtn.querySelector('.like-count');
    let currentLikes = parseInt(likeCountSpan.textContent, 10);

    if (!likeBtn.classList.contains('liked')) {
        // User is liking the post
        likeBtn.classList.add('liked');
        likeCountSpan.textContent = currentLikes + 1;
        // Swap heart emoji to filled
        likeBtn.innerHTML = `💛 <span class="like-count">${currentLikes + 1}</span> Likes`;
    } else {
        // User is unliking the post
        likeBtn.classList.remove('liked');
        likeCountSpan.textContent = currentLikes - 1;
        // Swap heart emoji back to outline
        likeBtn.innerHTML = `🤍 <span class="like-count">${currentLikes - 1}</span> Likes`;
    }
});

// 3. Comment Submission Engine
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('send-comment-btn')) {
        const sendBtn = e.target;
        const commentRow = sendBtn.parentElement;
        const inputField = commentRow.querySelector('.comment-input');
        const commentText = inputField.value.trim();

        // Don't allow empty submissions
        if (commentText === '') return;

        // Find the comments list inside this specific card
        const card = sendBtn.closest('.story-card');
        const commentsList = card.querySelector('.comments-list');

        // Create a new comment element block dynamically
        const newComment = document.createElement('div');
        newComment.classList.add('comment-item');
        newComment.innerHTML = `<strong>@you:</strong> ${commentText}`;

        // Inject it right into the bottom of the feed list
        commentsList.appendChild(newComment);

        // Clear the input box so it's ready for another comment
        inputField.value = '';
    }
});