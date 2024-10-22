const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const updateUserController = require("../controllers/user/updateUserController");
const deleteUserController = require("../controllers/user/deleteUserController");
const getUserController = require("../controllers/user/getUserController");
const followUserController = require("../controllers/user/followUserController");
const unfollowUserController = require("../controllers/user/unfollowUserController");
const getAllUsersController = require("../controllers/user/getAllUsersController");
const getUserPostsController = require("../controllers/user/getUserPostsController");
const deletePostController = require("../controllers/user/deletePostController");
const addPostToBookmarkController = require("../controllers/user/addPostToBookmarkController");
const getBookmarksController = require("../controllers/user/getBookmarksController");
const deleteBookmarkController = require("../controllers/user/deleteBookmarkController");
const router = express.Router();

// Get all users
router.get("/", getAllUsersController);

router.get("/bookmark", authMiddleware, getBookmarksController);

// Get user by ID
router.get("/:id", authMiddleware, getUserController);

router.get("/posts", authMiddleware, getUserPostsController);

// Update and delete user
router.put("/:id", authMiddleware, updateUserController);
router.delete("/:id", authMiddleware, deleteUserController);

// Follow and Unfollow routes
router.put("/follow/:id", authMiddleware, followUserController);
router.put("/unfollow/:id", authMiddleware, unfollowUserController);

// delete post
router.delete("/posts/:id", authMiddleware, deletePostController);

// add post to bookmark
router.post("/bookmark/:postId", authMiddleware, addPostToBookmarkController);
router.delete("/bookmark/:postId", authMiddleware, deleteBookmarkController);

module.exports = router;
