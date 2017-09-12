/*Load the modules*/
const express = require('express');
const app = express();
var baseController = require('./controllers/baseController');
/*************************************************************/

/*Set up things*/
app.use(express.static('./public')); /*Static files*/
app.use(express.static('./scripts')); /*Static files*/
/*****************************************************/

baseController(app);

/***********************/
app.listen(5000, () => {
    
    console.log('Server is on!');
});
