const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const createPostController = require("../controllers/post/createPostController");
const updatePostController = require("../controllers/post/updatePostController");
const likePostController = require("../controllers/post/likePostController");
const getPostController = require("../controllers/post/getPostController");
const getUserFeedController = require("../controllers/post/getUserfeedController");
const router = express.Router();

// create a post
router.post("/", authMiddleware, createPostController);

router.get("/feed", authMiddleware, getUserFeedController);
router.get("/:id", authMiddleware, getPostController);

router.put("/:id", authMiddleware, updatePostController);

router.put("/:id/like", authMiddleware, likePostController);

module.exports = router;
