import express from "express";
import { PresentationController } from "../controllers/presetation.controller";

const { getPresentation } = new PresentationController();

const router = express.Router();

router.get("/presentation/:id", getPresentation);

export default router;
