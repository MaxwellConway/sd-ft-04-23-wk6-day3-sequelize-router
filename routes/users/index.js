const express = require("express");
const router = express.Router();
const { Max } = require("../../models");
//CRUD

router.get("/get_users", (req, res) => {
  res.send("/get_users");
});

router.post("/post_user", async (req, res) => {
  const { name } = req.body;
  const newUser = await Max.create({
    name: name,
  });
  res.send(`Success`);
});

router.put("/put_users", (req, res) => {
  res.send("/put_users");
});

router.delete("/delete_users", (req, res) => {
  res.send("/delete_users");
});

module.exports = router;
