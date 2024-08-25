const express = require('express');

const app = express();

// Fetch the data from other server
app.get('/', (req, res) => {
    fetch('http://localhost:5000/data')
        .then(response => response.text())
        .then(data => {
            res.send(data);
        });
});

app.listen(5001, () => {
    console.log('Server is running on http://localhost:5001');
});