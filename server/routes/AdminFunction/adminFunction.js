const express = require('express')

const router = express.Router()
const Food = require('../../models/Food')
const Reward = require('../../models/BusinessFood')
const LoginAuditory = require('../../models/loginAuditory')
const {Gym} = require('../../models/Gym')

router.post('/addFood', (req, res) => {
  const food = new Food(req.body)

  food.save((err, doc) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true
    })
  })
})
router.get('/getUsersAuditory', (req, res) => {
  LoginAuditory.find()
    .populate('_id')
    .exec((err, data) => {
      if (err) return res.status(400).send(err)
      res.status(200).json({ success: true, data })
    })
})
router.post('/addAuditoryUser', (req, res) => {
  const auditoryUser = new LoginAuditory(req.body)
  auditoryUser.save((err, doc) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true
    })
  })
})

router.post('/addReward', (req, res) => {
  const reward = new Reward(req.body)

  reward.save((err, doc) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true
    })
  })
})
router.post('/addGym', (req, res) => {
  const gym = new Gym(req.body)

  gym.save((err, doc) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true
    })
  })
})

module.exports = router
