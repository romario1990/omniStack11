import OngsController from "../../controller/OngsController";

export const listOngs = async (req, res, next) => {
  new OngsController()
    .listOngs()
    .then((data) => res.send(data))
    .catch(next);
};
