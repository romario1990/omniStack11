import { Router } from "express";
import * as controller from "./controller";

const router = Router();

router.get("/", controller.listOngs);
router.post("/", controller.cadastrar);

export default router;
