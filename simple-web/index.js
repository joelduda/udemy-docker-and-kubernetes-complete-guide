const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('hi there jimmy asdf');
});

app.listen(8080, () => {
    console.log('listening on port 8080');
});