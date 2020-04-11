import OngsDao from "../../dao/OngsDao";

export default class OngsController {
  async listOngs() {
    return { name: "Teste listar" };
  }

  async cadastrar(body) {
    const ongsDao = new OngsDao();
    return ongsDao.cadastrar(body);
  }
}
