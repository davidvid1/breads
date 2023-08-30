const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')



//create
breads.post('/', (req, res) => {
  if(req.body.hasGluten ==='on'){
    req.body.hasGluten = true
  } else{
    req.body.image= false
  }
  
  req.body.image= undefined
  breads.insertMany([req.body])
  res.redirect('/breads')
}

)









// INDEX
breads.get('/', (req, res) => {
  res.render('Index',
    {
      breads: Bread
    }
  )
// res.send(Bread)
})




// SHOW
breads.get('/:arrayIndex', (req, res) => {
  res.send(Bread[req.params.arrayIndex])
})


module.exports = breads

