const Post = require("../../models/postModel");

const updatePostController = async (req, res) => {
  const postIdToUpdate = req.params.id;
  const authenticatedUser = req.user.userId;
  const { description, image } = req.body;

  try {
    const post = await Post.findById(postIdToUpdate);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Check if the authenticated user is the author of the post
    if (post.author !== authenticatedUser) {
      return res
        .status(403)
        .json({ message: "You do not have permission to update this post" });
    }

    const updatedPost = await Post.findByIdAndUpdate(
      postIdToUpdate,
      { $set: { description, image } }, // Use `$set` to update specific fields
      { new: true, runValidators: true }
    );

    res
      .status(200)
      .json({ message: "Post updated successfully", post: updatedPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = updatePostController;
