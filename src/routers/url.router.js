import express from "express";
const router = express.Router();
import { handleGenerateNewShortURL, getAnalytics } from "../controllers/url.controller.js";

router.post("/", handleGenerateNewShortURL);
router.post("/analytics/:shortid", getAnalytics )

export {router};