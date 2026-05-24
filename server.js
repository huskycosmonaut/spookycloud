const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to handle JSON data
app.use(express.json());

// Main route
app.use((req, res) => {
    res.send('<h1>Spookycloud MVP is Alive! ☁️👻</h1><p>Your local server is running perfectly.</p>');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});