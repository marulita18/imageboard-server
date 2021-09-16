const { Router } = require("express");
const { toJWT, toData } = require("../auth/jwt");

const router = new Router();

router.post("/", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).send("Please add your login details");
    } else {
      //   const userLoggedIn = await toJWT.create({
      //     email,
      //     password,
      //   });
      res.send({
        jwt: toJWT({ userId: 1 }),
      });
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
