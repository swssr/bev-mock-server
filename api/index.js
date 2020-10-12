const data = require("./data");
const micro = require("micro-cors");

const cors = micro();

const getRstaurants = (req, res) => {
  return res.status(200).json(data);
};

module.exports = cors(getRstaurants);
