const { Router } = require("express");
const Images = require("../models").image;

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
