var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema ({
  message: String,
  date: {
    type: Date,
    default: Date.now
  },
  flgUseStatus: {
    type: Number,
    default: 1
  }
});



mongoose.model ('messagedetails', messageSchema);
