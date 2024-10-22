const Post = require("../../models/postModel");

const deletePostController = async (req, res) => {
  const postIdToDelete = req.params.id;
  const authenticatedUser = req.user.userId;

  try {
    // Find the post to ensure it exists and to verify the author
    const post = await Post.findById(postIdToDelete);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Check if the authenticated user is the author of the post
    if (post.author !== authenticatedUser) {
      return res
        .status(403)
        .json({ message: "You do not have permission to delete this post" });
    }

    // Delete the post if the user is authorized
    const deletedPost = await Post.findByIdAndDelete(postIdToDelete);

    res
      .status(200)
      .json({ message: "Post deleted successfully", post: deletedPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = deletePostController;
