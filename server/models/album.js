const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const album = new Schema ({
  title : {
    tyle : String,
    required : true
  }
});

module.exports = mongoose.model('Album', album);
