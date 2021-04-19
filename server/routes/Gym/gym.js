
const {Gym} = require('../../models/Gym')

const getAll = (req, res) => {
  Gym.find({}, (err, gyms) => {
    if (err) res.send({ msg: 'can`t get the gym list', error: err })
    res.send(gyms)
  })
}

module.exports = {
  getAll,
}
