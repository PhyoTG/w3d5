const express = require('express');
const path = require('path');
const app = express();

app.use('/css', express.static(path.join(__dirname, 'css')));

const date = new Date();
const hour = date.getHours();

app.get('/', function(req, res) {
    if (hour >= 6 && hour <= 18) {
        res.sendFile(path.join(__dirname, '/index.html'));
    } else {
        res.sendFile(path.join(__dirname, '/index-.html'));
    }
}); 
app.listen(3000);