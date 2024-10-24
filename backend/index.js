const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db/conn");
const userRouter = require("./routes/userRoutes.js");
const authRouter = require("./routes/authRoutes.js");
const postRouter = require("./routes/postRoutes.js");
const uploadMediaRouter = require("./routes/uploadMediaRoutes.js");

dotenv.config();
connectDB();

const corsOptions = {
  origin: process.env.FRONTEND_URL.trim(), // Remove any extra spaces or slashes
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
};

//middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use("/public", express.static("public")); // Serve public folder

app.get("/ping", (req, res) => {
  res.send("PONG");
});

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);
app.use("/api/media", uploadMediaRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
