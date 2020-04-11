import { generateUUID } from "../../helpers/uuid";
import BaseDAO from "../BaseDao";
import { connection } from "../../config";

export default class OngsDao extends BaseDAO {
  constructor() {
    super("ongs");
  }

  async cadastrar(body) {
    const id = generateUUID();
    const dados = {
      name: body.name,
      email: body.email,
      whatsapp: body.whatsapp,
      city: body.city,
      uf: body.uf,
      id,
    };

    try {
      await connection()(this.nameTable).insert(dados);
    } catch (error) {
      console.log("Falha a salvar ao tentar salvar ongs");
    }
    return id;
  }
}
