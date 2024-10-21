const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const connectDB = require("./db/conn");
const userRouter = require("./routes/userRoutes.js");
const authRouter = require("./routes/authRoutes.js");
const postRouter = require("./routes/postRoutes.js");

dotenv.config();
connectDB();

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
};

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors(corsOptions));

app.get("/ping", (req, res) => {
  res.send("PONG");
});

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
