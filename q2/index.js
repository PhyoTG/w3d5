const express = require("express");
const app = express();
const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded());
app.post('/result', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    if (!name) {
    name = "person";
    }
    if (!age) {
    age = "unknown";
    }
    res.send(`Welcome ${name} with the age of ${age}`);
});

app.listen(3000,()=> {
    console.log("Server Started");
})