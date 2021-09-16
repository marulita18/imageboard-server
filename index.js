const express = require("express");
const jsonParser = express.json();

const imageRouter = require("./routers/image");
const userRouter = require("./routers/user");

const app = express();
app.use(jsonParser);

app.use("/users", userRouter);
app.use("/images", imageRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log("listening on 4000"));
