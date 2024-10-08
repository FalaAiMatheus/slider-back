import express from "express";
import { PresentationController } from "../controllers/presetation.controller";

const { getPresentations } = new PresentationController();

const router = express.Router();

router.get("/presentations", getPresentations);

export default router;
