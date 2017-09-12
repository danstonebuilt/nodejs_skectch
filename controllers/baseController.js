
const settings = require("../settings");
var slash = require('slash');

module.exports = function(app) {
    
    app.get('/', (req, res)=>{
        res.send('Thats fine :-)');
    });   
    
    
    app.get('/path', (req, res)=>{
        res.send(slash(settings.PROJECT_DIR)+'/views/main.html');
    });
    
    app.get('/home', (req, res)=>{
        res.sendFile(slash(settings.PROJECT_DIR)+'/views/main.html');
    });
    
    app.delete('/home', (req, res)=>{
        
    });
};