const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const phoneSchema = new Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
  price: { type: Number, required: true },
  battery: { type: Number, required: true },
  chipset: { type: String, required: true },
  description: { type: String, required: true },
  displayResolution: { type: String, required: true },
  displaySize: { type: Number, required: true },
  displayType: { type: String, required: true },
  os: { type: String, required: true },
});

const phoneModel = mongoose.model("Phone", phoneSchema);

module.exports = phoneModel;
