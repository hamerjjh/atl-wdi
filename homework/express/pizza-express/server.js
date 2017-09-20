const express = require('express');
const app = express();

var hbs = require('hbs');

app.set("view engine", "hbs");
app.set('views', './views');


app.get('/', (req, res) => {
    res.render("Welcome to Pizza Express!");
  })

  app.get('/topping/:type', function(req, res, next) {
    
        res.render(`${req.params.type} pizza! Good Choice`);
    });

 app.get('/order/:amount/:size', function(req, res, next) {

     res.render(`Your order for ${req.params.amount} ${req.params.size} pizzas will be ready in 1 minute!`);
 });



const port = 3000;

app.listen(port, function(){
    console.log("==========================")
    console.log('LISTENING ON PORT ' + port);
    console.log("==========================")
  });