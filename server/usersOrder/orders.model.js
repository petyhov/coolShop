const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const orederSchema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  phone: { type: Number, required: true },
  cart: { type: Object, required: true },
});

const orderModel = mongoose.model("Oder", orederSchema);

module.exports = orderModel;
