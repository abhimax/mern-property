import express from "express";

const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ message: "my test api router" });
});
export default router;
