const { Router } = require("express");
const Users = require("../models").user;
const bcrypt = require("bcrypt");

const router = new Router();

router.get("/", (request, response) => response.send(Users));

router.post("/", async (request, response, next) => {
  try {
    const { email, password, fullName } = request.body;
    if (!email || !password || !fullName) {
      response.status(400).send("Missing parameters");
    } else {
      const newUser = await Users.create({
        email,
        password: bcrypt.hashSync(password, 10),
        fullName,
      });
      response.json(newUser);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
