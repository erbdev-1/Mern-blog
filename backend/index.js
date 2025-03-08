import express from "express";
import connectDB from "./lib/connectDB.js";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import { connect } from "mongoose";

const app = express(); // create express app

// app.get("/test", (req, res) => {
//   res.status(200).send("Hello World");
// });

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

app.listen(3000, () => {
  connectDB();
  console.log("Server is running on port 3000");
});
