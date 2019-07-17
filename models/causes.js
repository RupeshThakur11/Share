var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var causesSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String
  },
  description: {
    type: String
  },
  imageURL: { 
    type: String
  },
  categories: [{
    _id: false,
    title: String
  }]

}, {
  timestamps: true
});

module.exports = mongoose.model('Causes', causesSchema);