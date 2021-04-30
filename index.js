const express = require('express')
const path = require('path')
const pessoas = require('./routes/pessoas')
const model = require('./models/index')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static('public'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/', (req, res) => res.render('index') )
app.use('/pessoas', pessoas )


app.listen(port, () => console.log('CRUD-ORM listening on port:', port))