const express = require('express');
const app = express();

// routes
app.get('/', (req, res) => {
    res.send('Hello world');
});

//server to listen in broswer
app.listen(3000);