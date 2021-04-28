const express = require('express')
const router = express.Router()
const indexRoute = require('../routes/pessoas')

router.get('/', indexRoute.pessoas)

module.exports = router