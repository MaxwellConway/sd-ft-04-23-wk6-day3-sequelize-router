const express = require("express");
const router = express.Router();
const { MaxPet } = require("../../models");
//CRUD

router.get("/get_pets", async (req, res) => {
  const pets = await MaxPet.findAll();
  res.send(pets);
});

router.post("/post_pet", async (req, res) => {
  const { name } = req.body;
  const newPet = await MaxPet.create({
    name: name,
  });
  res.send(`Success`);
});

router.put("/put_pets", (req, res) => {
  res.send("/put_pets");
});

router.delete("/delete_pet/:id", async (req, res) => {
  const { id } = req.params;
  const pet = await MaxPet.destroy({
    where: {
      id: id,
    },
  });
  res.send(`Success`);
});

module.exports = router;
