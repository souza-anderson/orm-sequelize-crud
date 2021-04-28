const express = require('express')
const path = require('path')
const pessoas = require('./controllers/pessoas')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static('public'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/pessoas', pessoas )


app.listen(port, () => console.log('CRUD-ORM listening on port:', port))