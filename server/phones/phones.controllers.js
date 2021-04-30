const Phone = require("./phones.model");

async function getPhones(req, res) {
  const phones = await Phone.find({});
  console.log(phones);
  res.status(200).send(phones);
}

module.exports = {
  getPhones,
};
