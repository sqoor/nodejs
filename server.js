const express = require('express');
const app = express();
const PORT = 1993;

const cars = require('./controller/cars');


app.get('/', (req, res) => {
    res.send('Hello world, NOT first nodejs server')
});

app.use('/api/cars/', cars);


app.get('*', (req, res,) => res.status(404).send({'message': 'Error: NOT FOUND'}));



app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}...`);
});