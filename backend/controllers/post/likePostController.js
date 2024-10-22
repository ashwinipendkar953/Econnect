const Post = require("../../models/postModel");

const likePostController = async (req, res) => {
  const postId = req.params.id;
  const authenticatedUser = req.user.userId;

  try {
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const hasLiked = post.likes.includes(authenticatedUser);

    let updatedPost;

    if (hasLiked) {
      // If already liked, remove the like (unlike)
      updatedPost = await Post.findByIdAndUpdate(
        postId,
        { $pull: { likes: authenticatedUser } },
        { new: true }
      );
      return res
        .status(200)
        .json({ message: "Post unliked", post: updatedPost });
    } else {
      // If not liked, add the like
      updatedPost = await Post.findByIdAndUpdate(
        postId,
        { $push: { likes: authenticatedUser } },
        { new: true }
      );
      return res.status(200).json({ message: "Post liked", post: updatedPost });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = likePostController;
