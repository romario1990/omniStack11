import knex from "knex";
import configuration from "../knexfile";

function connection() {
  try {
    return knex(configuration.development);
  } catch (error) {
    console.log("Falha ao tentar conectar no banco");
  }
}

export { connection };
