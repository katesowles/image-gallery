const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const image = new Schema({
  title : {
    type : String,
    required : true
  },
  caption : {
    type : String,
    required: true
  },
  link : {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Image', image);
