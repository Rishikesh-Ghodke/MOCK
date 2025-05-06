const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

// API route to fetch products
app.get('/api/products', (req, res) => {
    fs.readFile('products.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: "Failed to read file" });
        } else {
            res.json(JSON.parse(data));
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
