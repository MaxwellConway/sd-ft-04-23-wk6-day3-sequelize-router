const express = require("express");
const router = express.Router();
const { Max } = require("../../models");
//CRUD

router.get("/get_users", async (req, res) => {
  const users = await Max.findAll();
  res.send(users);
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

router.delete("/delete_user/:id", async (req, res) => {
  const { id } = req.params;
  const user = await Max.destroy({
    where: {
      id: id,
    },
  });
  res.send(`Success`);
});

module.exports = router;
