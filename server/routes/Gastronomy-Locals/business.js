const BusinessFood = require('../../models/BusinessFood')

const getAll = (req, res) => {
  BusinessFood.find({}, (err, buss) => {
    if (err) res.send({ msg: 'can`t get the user list', error: err })
    res.send(buss)
  })
}

const getById = (req, res) => {
  BusinessFood.findById(req.params.id, (err, buss) => {
    if (err)
      res.send({ msg: `Cant't get the product ${req.params.id}`, error: err })
    res.send(buss)
  })
}
const insert = (req, res) => {
  const buss = new BusinessFood({
    photo: 'images/beneficios/pagonia.png',
    name: req.body.name,
    description: req.body.description,
    Location: req.body.Location,
    HoursOfAtention: req.body.HoursOfAtention,
    Category: req.body.Category
  })
  buss.save((err, doc) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({ success: true })
  })
}

const remove = (req, res) => {
  BusinessFood.findOneAndDelete({ _id: req.params.id }, (err, doc) => {
    if (err) return res.status(500).send(err)
    res.status(200).send(doc)
  })
}

module.exports = {
  getAll,
  getById,
  insert,
  remove
}
