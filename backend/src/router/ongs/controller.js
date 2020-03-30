const Ongs = require("./../../controller/Ongs/index");

const listOngs = (req, res, next) => {
  new Ongs()
    .listOngs()
    .then(data => res.json(data))
    .catch(() => next());
};

module.exports = {
  listOngs
};
