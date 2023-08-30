// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => { console.log('connected to mongo: ', process.env.MONGO_URI) })

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())



// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads')
  })
  
  // Breads
  const breadsController = require('./controllers/breads_controllers.js')
  app.use('/breads', breadsController)
  


// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})