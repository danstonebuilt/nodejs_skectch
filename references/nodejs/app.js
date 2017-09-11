var express = require('express');

var app = express();

/*Set EJS Engine*/
app.set('view engine', 'ejs');

/*Set a middleware for static files*/
app.use('/assets', express.static('assets'))

app.get('/home', function(req, res) {

    res.render('index');
});


app.get('/contact', function(req, res) {
    console.log(req.query);
});

app.listen(3000);

console.log('Server is on :-)');
