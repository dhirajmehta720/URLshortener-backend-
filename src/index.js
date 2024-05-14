import express from "express";
const app = express();
import { router } from "./routers/url.router.js";
import { connectDB } from "./connect.js";
import { configDotenv } from "dotenv";
import { URL } from "./models/url.model.js";
configDotenv({ path: "./.env" });
connectDB();
app.use(express.json());
app.use("/url", router);

app.get("/:shortID", async (req, res) => {
  const shortID = req.params.shortID;
  const data = await URL.findOneAndUpdate(
    {
      shortID,
    },
    {
      $push: {
        visitHistory: {
            timestamp : Date.now(),
        }
      },
    }
  );
  res.redirect(data.redirectURL);
});

app.listen(8000, () => {
  console.log("server started");
});
