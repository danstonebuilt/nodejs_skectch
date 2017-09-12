const express = require('express');
const app = express();

app.use(express.static(__dirname));

var products = [
    {
        id: 1,
        name: 'laptop'
    },
    {
        id: 2,
        name: 'Microwave'
    },
    {
        id: 3,
        name: 'Router'
    }
];

app.get('/', (req, res) => {
    
    res.send('Hello Word');
});

app.get('/homepage', (req, res) => {
    
    res.sendFile(__dirname+'/main.html');
});

