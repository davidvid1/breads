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

// Index:
breads.get('/', (req, res) => {
  Baker.find()
    .then(foundBakers => {
      Bread.find()
      .then(foundBreads => {
          res.render('index', {
              breads: foundBreads,
              bakers: foundBakers,
              title: 'Index Page'
          })
      })
    })
})






  // SHOW
breads.get('/:arrayIndex', (req, res) => {
  res.render('Show', {
    bread: Bread[req.params.arrayIndex]
  })


  //res.send(Bread[req.params.arrayIndex])
})
//
breads.get('/data/seed', (req, res) => {
  Bread
      .insertMany(breadSeed)
      .then(createdBreads => {
          res.redirect('/breads')
      })
})




module.exports = breads

