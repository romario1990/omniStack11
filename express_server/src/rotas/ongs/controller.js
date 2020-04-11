import OngsController from "../../controller/OngsController";

export function listOngs(req, res, next) {
  new OngsController()
    .listOngs()
    .then((data) => res.send(data))
    .catch(next);
}

export function cadastrar(req, res, next) {
  const { connection, body } = req;
  new OngsController()
    .cadastrar(body)
    .then((data) => res.send(data))
    .catch(next);
}
