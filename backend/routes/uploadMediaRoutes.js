// backend/routes/uploadRoutes.js
const express = require("express");
const multer = require("multer");
const uploadMediaController = require("../controllers/media/uploadMediaController");

const router = express.Router();

// Set up multer for file handling
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "public/media/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

router.post("/upload", upload.single("media"), uploadMediaController);

module.exports = router;
