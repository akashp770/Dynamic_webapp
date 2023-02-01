const mongoose = require("mongoose");

const contacts = mongoose.Schema({
  email: String,
  contact: String,
  query: String,
});

module.exports = mongoose.model("queries", contacts);
