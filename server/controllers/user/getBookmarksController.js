const Post = require("../../models/postModel");
const User = require("../../models/userModel");

const getBookmarksController = async (req, res) => {
  const authenticatedUserId = req.user.userId;

  try {
    // Check if the post exists
    const posts = await User.findById(authenticatedUserId).populate({
      path: "bookmark",
      model: "Post",
      populate: { path: "author", select: "username profilePic" },
    });

    res
      .status(200)
      .json({ message: "Bookmarks fetched successfully", data: posts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = getBookmarksController;
