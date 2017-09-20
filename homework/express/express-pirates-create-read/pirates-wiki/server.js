//your code here
/* packages */
var express     = require('express');
var hbs         = require('hbs');
/* app settings*/
var app         = express();
var port        = process.env.PORT || 3002;
const bodyParser = require('body-parser');
const pirateController = require('./controllers/pirates.js');

/*log*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*Views*/
app.set('view engine', 'hbs');

//controllers for `/pirates` resource
app.use("/pirates", pirateController);

/* HOME */
app.get('/', function(req,res) {
    res.send('This is our Home Page');
  });



// Start server
app.listen(port, function() {
    console.info('Server Up -- Ready to serve hot todos on port', port,"//", new Date());
  });