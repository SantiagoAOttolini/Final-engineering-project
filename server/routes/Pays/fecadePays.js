const { CashPay } = require('../../models/CashPays')

//=================================
//         Fecade Pattern
//=================================

/* getFind acts as a code reducer to apply the reuse 
  technique and at the same time simplify the complexity 
  of the favorite function endpoints of the recipes use case*/

const getFind = (url, req, res) => {
  if (url === '/getCashPays') {
    CashPay.find()
      .populate('_id')
      .exec((err, pays) => {
        if (err) return res.status(400).send(err)
        res.status(200).json({ success: true, data: pays })
      })
  } else if (url === '/getCashPaysById') {
    CashPay.find({ ID: req.params._id }).exec((err, cashPay) => {
      if (err) return res.status(400).send(err)
      return res.status(200).json({ success: true, cashPay })
    })
  }
}

module.exports = { getFind }
