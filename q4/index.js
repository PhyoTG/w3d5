const express = require('express');
const path = require('path');
const app = express();
const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded());
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

app.post('/result', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    res.redirect('/output?name='+name+'&age='+age);
});

app.get('/output', (req, res) => {
 let name = req.query.name;
 let age = req.query.age;
 res.send(`Welcome ${name} with the age of ${age}`);
});
app.listen(3000);