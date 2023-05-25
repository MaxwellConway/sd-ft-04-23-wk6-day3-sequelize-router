const express = require("express");
const router = express.Router();
const { Max } = require("../../models");
//CRUD

router.get("/get_pets", (req, res) => {
  res.send("/get_pets");
});

router.post("/post_pet", async (req, res) => {
  const { name } = req.body;
  const newPet = await Max.create({
    name: name,
  });
  res.send(`Success`);
});

router.put("/put_pets", (req, res) => {
  res.send("/put_pets");
});

router.delete("/delete_pets", (req, res) => {
  res.send("/delete_pets");
});

module.exports = router;
