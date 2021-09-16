const { Router } = require("express");
const { toJWT, toData } = require("../auth/jwt");
const User = require("../models").user;
const bcrypt = require("bcrypt");
const authMiddleware = require("../auth/middleware");

const router = new Router();

router.get("/test-auth", authMiddleware, (req, res) => {
  res.send({
    message: `Thanks for visiting the secret endpoint $"{req.user.email}`,
  });
});

router.post("/", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: { email: email },
    });
    if (!user) {
      res.status(400).send("User doesn't exist");
    } else if (bcrypt.compareSync(password, user.password)) {
      const jwt = toJWT({ userId: user.id });
      res.send({
        jwt,
      });
    } else {
      res.status(400).send({ message: "Login information incorrect" });
    }
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
