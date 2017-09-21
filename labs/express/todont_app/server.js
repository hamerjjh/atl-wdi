/* packages */
var express = require('express');
var hbs = require('hbs');
const bodyParser = require('body-parser');
const methodOverride = require('method-override'); 
/* app settings */
var app = express();
var port = process.env.PORT || 3005;
const todontsController = require("./controllers/todonts");

/* log */
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({
    extended: true
  }));
/* Views */
app.set('view engine', 'hbs');

/*Controllers*/ 
app.use("/todonts", todontsController);

/* HOME */
app.get('/', function(req,res) {
    res.send('This is our Home Page');
  });

  // Star Server
app.listen(port, function() {
    console.info('Server Up -- Ready to serve hot todos on port', port,"//", new Date());
  });