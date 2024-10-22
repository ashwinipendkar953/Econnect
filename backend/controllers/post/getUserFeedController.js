const mongoose = require("mongoose");
const Post = require("../../models/postModel");
const User = require("../../models/userModel");

// get all posts
const getUserFeedController = async (req, res) => {
  const authenticatedUserId = req.user.userId;

  try {
    const user = await User.findById(authenticatedUserId).populate("following");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Fetch posts from users that the authenticated user is following, as well as their own posts
    const followingIds = user.following.map((follow) => follow._id);
    console.log(followingIds);

    if (!followingIds.includes(authenticatedUserId)) {
      followingIds.push(authenticatedUserId); // Include the authenticated user
    }

    const objectIds = followingIds.map((id) => new mongoose.Types.ObjectId(id));

    const posts = await Post.find({ author: { $in: objectIds } })
      .sort({ createdAt: -1 })
      .populate("author", "username profilePic");

    res.status(200).json({
      message: "User feed fetched successfully",
      posts,
    });
  } catch (error) {
    // console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = getUserFeedController;
