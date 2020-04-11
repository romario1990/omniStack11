import OngsController from "../../controller/OngsController";

export const listOngs = async (req, res, next) => {
  new OngsController()
    .listOngs()
    .then((data) => res.send(data))
    .catch(next);
};

export const cadastrar = async (req, res, next) => {
  const { connection, body } = req;
  new OngsController()
    .cadastrar(body)
    .then((data) => res.send(data))
    .catch(next);
};
