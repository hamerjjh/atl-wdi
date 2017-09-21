const express = require("express");
const router = express.Router();
const data = require("../data.js");

/*Index TODONTS */
router.get('/', (req,res) => {
    res.render('todonts/index', {
        todonts: data.seededToDonts
    });
  });
/* New TODONTS */
router.get('/new', (req,res) => {
    res.render('todonts/new');
})

/* Show TODONTS */
router.get('/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const todonts = data.seededToDonts[id]
    if (!todonts){
        res.render('todonts/show', {
            error: "No to-donts found with this ID"
        })
    } else {
        res.render('todonts/show', {
            todonts
    })
    }
});
/*CREATE TODONTS */
router.post('/', (req, res) => {
    console.log(req.body);
    const newTodonts = req.body;
    data.seededToDonts.push(newTodonts);
    res.redirect('/todonts');
});
/* DELETE TODONTS */
router.delete('/:id', function(req, res) {
    data.seededToDonts.splice(req.params.id, 1); // remove the item from the array

    res.redirect('/todonts');  // redirect back to the index route
});

/* EDIT TODONTS */
router.get('/:id/edit', (req, res) => {
    res.render('todonts/edit', {
      todonts: {
        id: req.params.id,
        description: data.seededToDonts[req.params.id].description,
        urgent: data.seededToDonts[req.params.id].urgent,
      }
    });
  });

/* UPDATE TODONTS */
router.put('/:id', (req, res) => {
    var toDontsToEdit = data.seededToDonts[req.params.id];
  
    toDontsToEdit.description = req.body.description;
    toDontsToEdit.urgent = req.body.urgent;
  
    res.redirect('/todonts');
  })

module.exports = router;