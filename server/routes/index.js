const express = require('express')
const food = require('./Food/foodIndex')
const user = require('./Users/users')
const businessFood = require('./Gastronomy-Locals/businessIndex')
const pay = require('./Pays/Pays')
const adminFood = require('./AdminFunction/adminFunction')
const strategy = require('./Gym/strategyPattern')
const gym = require('./Gym/gymIndex')


const router = express.Router()

router.use('/public/uploads', express.static('server/public/uploads'))
router.use(
  '/public/images/beneficios',
  express.static('server/public/images/beneficios')
)
router.use(
  '/public/images/foods',
  express.static('server/public/images/foods/')
)
router.use(
  '/public/images/combos',
  express.static('server/public/images/combos/')
)
router.use(
  '/public/images/gyms',
  express.static('server/public/images/gyms/')
)

router.use('/api/users', user)
router.use('/api/gymStrategy', strategy)
router.use('/api/gyms', gym)
router.use('/api/food', food)
router.use('/api/gastronomy', businessFood)
router.use('/api/checkout', pay)
router.use('/api/admin', adminFood)

module.exports = router
