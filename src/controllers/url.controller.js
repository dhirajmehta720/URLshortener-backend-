import { nanoid } from "nanoid";
import asyncHandler from "express-async-handler";
import { URL } from "../models/url.model.js";

const handleGenerateNewShortURL = asyncHandler(async (req, res) => {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is requires" });
  const shortID = nanoid(8);
  await URL.create({
    shortID: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });
  return res.json({ id: shortID });
});

const getAnalytics = asyncHandler(async (req, res) => {
  const shortID = req.params.shortid;
  const result = await URL.findOne({ shortID });
  return res.json({ totalClicks: result.visitHistory.length });
});

export { handleGenerateNewShortURL, getAnalytics };
