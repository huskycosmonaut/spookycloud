const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to handle JSON and Form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home Route
app.get('/', (req, res) => {
    res.send('<h1>Spookycloud MVP is Alive! ☁️👻</h1><a href="/submit">Go to Submission Page</a>');
});

// NEW FEATURE: A submission page route
app.get('/submit', (req, res) => {
    res.send(`
        <h1>Submit something spooky to the cloud... 👀</h1>
        <form action="/data" method="POST">
            <input type="text" name="spookyText" placeholder="Type here..." required />
            <button type="submit">Send to Cloud</button>
        </form>
    `);
});

// NEW FEATURE: A route to receive and display the submitted data
app.post('/data', (req, res) => {
    const userText = req.body.spookyText;
    res.send(`<h1>Spookycloud received your message! ☁️</h1><p>You said: "${userText}"</p><a href="/">Go Home</a>`);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});