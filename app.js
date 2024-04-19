const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/login', (req, res) => {
    if (req.body.username === 'bill' && req.body.password === 'NoOneWillEverGuessThisPassword!') {
        res.json({ success: true, redirect: '/fc77a530f26298e49d40.html' });
    } else {
        res.json({ success: false });
    }
});

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});

