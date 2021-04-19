const express = require('express')
const controller = require('./gym')

const router = express.Router()
const { getAll} = controller

router.use(express.json())

router.get('/', getAll)

module.exports = router
