// index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// POST Route
app.post('/bfhl', (req, res) => {
    const { data } = req.body;
    const user_id = "nihar_gour_11132004"; // Replace with actual DOB
    const email = "nihar@college.com";
    const roll_number = "CU123456";

    if (!Array.isArray(data)) {
        return res.status(400).json({
            "is_success": false,
            "message": "Invalid data format. 'data' should be an array."
        });
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));
    const highest_alphabet = alphabets.length > 0 
        ? [alphabets.sort((a, b) => b.toLowerCase().localeCompare(a.toLowerCase()))[0]]
        : [];

    res.json({
        "is_success": true,
        "user_id": user_id,
        "email": email,
        "roll_number": roll_number,
        "numbers": numbers,
        "alphabets": alphabets,
        "highest_alphabet": highest_alphabet
    });
});

// GET Route
app.get('/bfhl', (req, res) => {
    res.status(200).json({ "operation_code": 1 });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
