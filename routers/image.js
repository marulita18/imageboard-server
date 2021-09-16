const { Router } = require("express");
const Image = require("../models").image;
const { toData } = require("../auth/jwt");

const router = new Router();

router.post("/", async (request, response, next) => {
  try {
    const title = request.body.title;
    if (!title) {
      response.status(400).send("Must provide a title");
    } else {
      const Image = await Images.create(request.body);
      response.send(Image);
    }
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (request, response, next) => {
  try {
    const id = request.params.id;
    const imageById = await Images.findByPk(id);
    response.send(imageById["url"]);
  } catch (e) {
    next(e);
  }
});

router.get("/auth/messy", async (req, res, next) => {
  const auth =
    req.headers.authorization && req.headers.authorization.split(" ");
  if (auth && auth[0] === "Bearer" && auth[1]) {
    try {
      const data = toData(auth[1]);
      console.log("holaaaa", data);
      const allImages = await Image.findAll();
      res.json(allImages);
    } catch (e) {
      console.log(e.message);
      res.status(400).send("Invalid JWT token");
    }
  } else {
    res.status(401).send({
      message: "Please supply some valid credentials",
    });
  }
});

router.get("/", async (request, response, next) => {
  try {
    const images = await Images.findAll();
    // console.log("my images are", images);
    response.send(images);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
