const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to handle JSON and Form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Tell Express to serve HTML, CSS, and JS from the "public" folder
app.use(express.static('public'));

// API Route to handle story submissions from the feed
app.post('/submit-story', (req, res) => {
    const storyText = req.body.story;
    console.log("New story received:", storyText);
    // Right now it just sends you back to the app homepage
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});