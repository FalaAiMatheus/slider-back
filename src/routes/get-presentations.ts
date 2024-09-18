import express from "express";
import { getPresentations } from "../controllers/presetation.controller";

const router = express.Router();

router.get('/presentations', getPresentations)

export default router;
