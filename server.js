// server.js - A minimalist URL Shortener API

const express = require('express');
const app = express();
const port = 3000;

// In-memory data store for simplicity: { "shortCode": "longURL" }
const urlStore = {};

// Helper function to generate a short, random code
function generateCode() {
    return Math.random().toString(36).substring(2, 8);
}

app.use(express.json()); // Middleware to parse JSON bodies

// --- Endpoint 1: Shorten a URL ---
app.post('/shorten', (req, res) => {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({ error: 'URL is required.' });
    }

    // Basic URL validation (for production, use a library like validator)
    if (!url.startsWith('http')) {
        return res.status(400).json({ error: 'Invalid URL format. Must start with http or https.' });
    }

    const shortCode = generateCode();
    urlStore[shortCode] = url;

    const shortUrl = `${req.protocol}://${req.get('host')}/${shortCode}`;
    
    // Respond with the new short URL
    res.json({ originalUrl: url, shortCode: shortCode, shortUrl: shortUrl });
});

// --- Endpoint 2: Redirect a Short Code ---
app.get('/:shortCode', (req, res) => {
    const { shortCode } = req.params;
    const longUrl = urlStore[shortCode];

    if (longUrl) {
        // Redirect the user to the original long URL
        return res.redirect(301, longUrl);
    } else {
        return res.status(404).send('URL not found.');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`URL Shortener API listening at http://localhost:${port}`);
});
