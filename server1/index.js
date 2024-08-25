const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello How are you?');
});

app.get('/data', (req, res) => {
    res.send('Hello I am fine');
});

// setup listening to link address
app.listen(5000, () => {
    console.log('server running on http://localhost:5000');
});
