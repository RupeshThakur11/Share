var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
  title: {
    type: String

  },
  author: {
    type: String
  },
  body: {
    type: String
  },
  comments: [{
    body: String,
    date: Date
  }],
  description: {
    type: String
  },
  hidden: {
    type: Boolean
  },
  meta: {
    likes: Number,
    views: Number
  },
  imageURL: {
    type: String
  }


}, {
  timestamps: true
});

module.exports = mongoose.model('Blog', blogSchema);