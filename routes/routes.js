const express = require("express");
const router = express.Router();
module.exports = router;

router.post("/post", (req, res) => {
  res.send("POST method");
});
router.get("/getAll", (req, res) => {
  res.send("Get all API");
});
router.get("/getOne/:id", (req, res) => {
  res.send("GET by id API");
});
router.patch("/update/:id", (req, res) => {
  res.send("update by id");
});
router.delete("/delete/:id", (req, res) => {
  res.send("delete by id");
});
