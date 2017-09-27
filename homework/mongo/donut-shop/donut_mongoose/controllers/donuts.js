//======================
// REQUIREMENTS
//======================
// require express, router, mongoose, Donut schema
const express = require('express')
const router = express.Router()
const Schema = require("../models/donuts.js");

const donutModel = Schema.donutModel;
//======================
// INDEX
/* Index Route */
router.get('/', (req, res) => {
        donutModel.find({})
            .then((donuts) => {
                res.render('donuts/index', {
                    donuts: donuts
                })
            })
            .catch((error) => {
                console.log(error)
            })
    });
//======================
// Create a GET index route "/" that sends all donuts to index.hbs



//======================
// NEW
//======================
// Create a GET new route "/new" that renders the new.hbs form
/* New Route */
router.get('/new', (req, res) => {
        res.render('donuts/new')
    })


//======================
// SHOW
//======================
// Create a GET show route "/:id" that renders the donut's show page
/* Show Route */
router.get('/:id', (req, res) => {
    const donutsId = req.params.id 
    donutModel.findById(donutsId)
    .then((donuts) => {
        res.render('donuts/show', {
            donuts
        })
        .catch((error) => {
            console.log(error)
        })
    })
})



//======================
// CREATE
//======================
// Create a POST index route "/" that creates a new donut
// and upon success redirects back to the index page "/"
/*CREATE Route*/
router.post('/', (req, res) => {
    const newDonut = req.body

    donutModel.create(newDonut)
    .then(() => {
    
        res.redirect('/'); 
    })
    .catch((error) => {
        console.log(error)
    })
})


//======================
// EDIT
//======================
// Create a GET edit route "/:id/edit" that renders the edit.hbs page and
// sends that donut's data to it
router.get('/:id/edit', (req, res) => {
    const donutsId = req.params.id
    donutModel.findById(donutsId)
    .then((donuts) => {
        res.render('donuts/edit', {
            donuts: donuts
        })
        .catch((error) => {
            console.log(error)
        })
})
})


//======================
// UPDATE
//======================
// Create a PUT update route "/:id" that updates the donut and
// redirects back to the SHOW PAGE (not index)
router.put('/:id', (req, res) => {
    
    const updatedDonuts = req.body
    const donutsId = req.params.id
    donutModel.findByIdAndUpdate(donutsId, updatedDonuts, {new: true})
    .then(() => {
        res.redirect(`/${donutsId}`);
    })
    .catch((error) => {
        console.log(error)
    })
})


//======================
// DELETE
//======================
// Create a DELETE delete route "/:id" that deletes the donut and
// redirects back to index page "/"
/*DELETE Route WITH BUTTON*/
router.delete('/:id', (req, res) => {
            const donutsId = req.params.id
            donutModel.findByIdAndRemove(donutsId)
            .then((donuts) => {
                res.redirect('/')
            })
            .catch((error) => {
                console.log(error)
            })
     
    })


//======================
// EXPORTS
//======================
// export router with module.exports
module.exports = router