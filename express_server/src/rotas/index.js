import { Router } from "express";
import ongs from "./ongs";
const routes = Router();

// routes.use("/", ongs);
routes.use("/ongs", ongs);

export default routes;
