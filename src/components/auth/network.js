import { Router } from "express";
import * as controller from "./controller";

const router = Router();

router.route("/callback").post(controller.callback);

export default router;
