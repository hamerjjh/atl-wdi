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
/*CREATE PIRATES */
router.post('/', (req, res) => {
    console.log(req.body);
    const newPirates = req.body;
    data.push(newPirates);
    res.redirect('/pirates');
});

/* DELETE TODOS */
router.delete('/:id', function(req, res) {
    data.splice(req.params.id, 1); // remove the item from the array

    res.redirect('/pirates');  // redirect back to the index route
});
/* EDIT TODOS */
router.get('/:id/edit', (req, res) => {
    res.render('pirates/edit', {
      pirates: {
        id: req.params.id,
        name: data[req.params.id].name,
        birthplace: data[req.params.id].birthplace,
        death_year: data[req.params.id].death_year,
        base: data[req.params.id].base,
        nickname: data[req.params.id].nickname,
      }
    });
  }); 
/* UPDATE TODOS */
 router.put('/:id', (req, res) => {
    var piratesToEdit = data[req.params.id];
  
    piratesToEdit.name = req.body.name;
    piratesToEdit.birthplace = req.body.birthplace;
    piratesToEdit.death_year = req.body.death_year;
    piratesToEdit.base = req.body.base;
    piratesToEdit.nickname = req.body.nickname;
  
    res.redirect('/pirates');
  }) 

//exports
module.exports = router;