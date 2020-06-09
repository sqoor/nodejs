const express = require('express');
const app = express();

const PORT = 4020;


app.get('/', (req, res) => homePage(req, res)); 
app.get('/home', (req, res) => homePage(req, res));



const homePage = (req, res) => {
    res.sendFile(__dirname + '/index.html');
}


app.listen(PORT, () => console.log(`Listening to port ${PORT}...`));