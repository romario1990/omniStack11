// file server.js
import express from "express";
const app = express();
import rotas from "./rotas";
app.use(express.json());
app.use(rotas);
app.listen(3000, () => console.log("Example app listening on port 3000!"));
