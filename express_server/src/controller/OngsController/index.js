import { generateUUID } from "../../helpers/uuid";

export default class OngsController {
  async listOngs() {
    return { name: "Teste listar" };
  }
  async cadastrar() {
    const id = generateUUID();
    return { name: "Teste cadastrar" };
  }
}
