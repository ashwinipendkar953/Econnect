const Post = require("../../models/postModel");
const User = require("../../models/userModel");

const addPostToBookmarkController = async (req, res) => {
  const postId = req.params.postId;
  const authenticatedUserId = req.user.userId;

  try {
    // Check if the post exists
    const isPostExists = await Post.findById(postId);
    if (!isPostExists) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Add the post to the user's bookmarks using $addToSet to avoid duplicates
    const updatedUser = await User.findByIdAndUpdate(
      authenticatedUserId,
      { $addToSet: { bookmark: postId } },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Bookmark saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = addPostToBookmarkController;
