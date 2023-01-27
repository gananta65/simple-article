const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  id: {
    required: true,
    type: String,
  },
  title: {
    required: true,
    type: String,
  },
  content: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Article", dataSchema);
