const Post = require("../../models/postModel");
const User = require("../../models/userModel");

const getUserPostsController = async (req, res) => {
  const authenticatedUserId = req.user.userId;
  console.log(authenticatedUserId);

  try {
    const user = await User.findById(authenticatedUserId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const posts = await Post.find({ author: authenticatedUserId })
      .sort({ createdAt: -1 })
      .populate("author", "username profilePic");

    res.status(200).json({
      message: "User posts fetched successfully",
      posts,
    });
  } catch (error) {
    // console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = getUserPostsController;
