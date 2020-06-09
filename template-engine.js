const express = require('express');
const app = express();

const PORT = 4040;


app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('homepage');
});

app.get('/profile/:name', (req, res) => {
    const data = {
        name: req.params.name,
        age: 83,
        job: 'Ninja',
        hobbies: ['read', 'write', 'sleep', 'eat']
    };

    res.render('profile', data);
});


app.listen(PORT, () => console.log(`Listening to port ${PORT}...`));