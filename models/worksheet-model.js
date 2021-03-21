const mongoose = require("mongoose");

const worksheetSchema = new mongoose.Schema({
  html: { type: String },
  code: { type: String },
  type: { type: String },
  inp1: { type: String },
  inp2: { type: String },
  inp3: { type: String },
  inp4: { type: String },
  inp5: { type: String },
  creator: { type: String },
  title: { type: String },
  approved: { type: Boolean, default: false },
  disapproved: { type: String, default: "awaiting" },
});

module.exports = mongoose.model("Worksheet", worksheetSchema);
