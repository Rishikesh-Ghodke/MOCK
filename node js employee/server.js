// server.js (Node.js + Express)
const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 3000;
app.use(cors());

app.get('/api/employees', (req, res) => {
    fs.readFile('employees.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Failed to load employee data' });
        } else {
            res.json(JSON.parse(data));
        }
    });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
