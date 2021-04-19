
const Food = require('../../models/Food')

const getAll = (req, res) => {
  Food.find({}, (err, foods) => {
    if (err) res.send({ msg: 'can`t get the food list', error: err })
    res.send(foods)
  })
}

const getById = (req, res) => {
  Food.findById(req.params.id, (err, foods) => {
    if (err)
      res.send({ msg: `Cant't get the product ${req.params.id}`, error: err })
    res.send(foods)
  })
}
const insert = (req, res) => {
  const food = new Food({
    photo: '/server/public/images/001-apple.png',
    name: req.body.name,
    valor: req.body.valor,
    carbs: req.body.carbs,
    protein: req.body.protein,
    grease1: req.body.grease1,
    grease2: req.body.grease2,
    grease3: req.body.grease3,
    fiber: req.body.fiber,
    sodium: req.body.sodium,
    adventages: req.body.adventages,
    description: req.body.description,
    Category: req.body.Category
  })
  food.save((err, doc) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({ success: true })
  })
}

const remove = (req, res) => {
  Food.findOneAndDelete({ _id: req.params.id }, (err, doc) => {
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
