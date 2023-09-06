const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')



//create
breads.post('/', (req, res) => {
  if(!req.body.image) {
      req.body.image = undefined 
  }
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.create(req.body)
  res.redirect('/breads')
})










// INDEX
breads.get('/', (req, res) => {
  Bread.find()
      .then(foundBreads => {
          console.log(foundBreads)
      })
  // res.render('index',
  //   {
  //     breads: Bread,
  //     title: 'Index Page'
  //   }
  // )
})





// SHOW
// SHOW
breads.get('/:id', (req, res) => {
  if (req.params.id) {
      req.params.id = "64eeaa79cef0b2292ab03103"
      Bread
          .findById(req.params.id)
          .then(bread => {
              res.render(
                  'Show',
                  {
                      bread: bread,
                      id: req.params.id
                  })
          })
          .catch(err => {
              console.log(err)
              res.render('NotFound')
          })
  } else {
      res.render('NotFound')
  }
  //res.send(Bread[req.params.arrayIndex])
})

breads.get('/data/seed', (req, res) => {
  Bread
      .insertMany(breadSeed)
      .then(createdBreads => {
          res.redirect('/breads')
      })
})




module.exports = breads

