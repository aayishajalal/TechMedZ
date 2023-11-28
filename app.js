const express = require("express");
const app = express();
app.use(express.static('public'));
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/public/html/index.html');
});
app.get('/aboutUs', (req,res) => {
    res.sendFile(__dirname + '/public/html/aboutUs.html');
});
app.get('/internship', (req,res) => {
    res.sendFile(__dirname + '/public/html/internship.html');
});
app.listen(3000, () => {
    console.log("Server Running on port 3000");
});
