import express from "express";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";

const app = express(); // create express app

// app.get("/test", (req, res) => {
//   res.status(200).send("Hello World");
// });

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
