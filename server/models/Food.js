const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Food = new Schema({
  photo: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  valor: {
    type: String,
    required: true
  },
  carbs: {
    type: String,
    required: true
  },
  protein: {
    type: String,
    required: true
  },
  grease1: {
    type: String,
    required: true
  },
  grease2: {
    type: String,
    required: true
  },
  grease3: {
    type: String,
    required: true
  },
  fiber: {
    type: String,
    required: true
  },
  sodium: {
    type: String,
    required: true
  },
  adventages: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  Category: {
    type: String,
    required: true
  }
})

const food = mongoose.model('Food', Food)

module.exports = food
