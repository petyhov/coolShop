const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const phoneSchema = new Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
  price: { type: String, required: true },
});

const phoneModel = mongoose.model("Phone", phoneSchema);

module.exports = phoneModel;
