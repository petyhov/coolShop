const Orders = require("./orders.model");

async function addOrder(req, res) {
  const order = await Orders.create(req.body);
  res.status(201).send(order);
}

module.exports = {
  addOrder,
};
