//your code below
//requirements
var express = require("express");
var router = express.Router();
var data = require('../models/data.js');

//* INDEX TOOLS */
router.get('/', (req, res) => {
    res.render('pirates/index', {
        pirates: data
    });
});

/* NEW PIRATES */
router.get('/new', (req,res) => {
    res.render('pirates/new');
})

/*SHOW PIRATES */
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const pirates = data[id];
      if (!pirates){
          res.render('pirates/show', {
              error: "No pirates found with this ID"
          })
      } else {
    res.render('pirates/show', {
        pirates
    })
  }
});

router.post('/', (req, res) => {
    console.log(req.body);
    const newPirates = req.body;
    data.push(newPirates);
    res.redirect('/pirates');
});

//exports
module.exports = router;