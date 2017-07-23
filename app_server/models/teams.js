var mongoose = require('mongoose');

var teamSchema = new mongoose.Schema({
  name: {type: String, required: true},
  manager: {type: String, required: true}
});

mongoose.model('Team', teamSchema);
