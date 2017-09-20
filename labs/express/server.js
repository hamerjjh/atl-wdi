const express = require('express');
const app = express();
const hbs = require('hbs');

app.set("view engine", "hbs");

app.use('/math', mathController);

app.get('/greeting/:name', (req, res) => {
    console.log(req.query);
    
    res.render("greeting", {
        data: req.query.name
    })
})




const PORT = 3002;

app.listen(PORT, () => {
    console.log("Express is listening on port", PORT);
});
