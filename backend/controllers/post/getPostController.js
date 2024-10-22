const Post = require("../../models/postModel");
const User = require("../../models/userModel");

const getPostController = async (req, res) => {
  const postId = req.params.id;

  try {
    // Find the post and populate the author's username and profilePic
    const post = await Post.findById(postId).populate({
      path: "author",
      select: "username profilePic",
    });

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({
      message: "Post data fetched successfully",
      post,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = getPostController;
