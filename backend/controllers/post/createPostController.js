const Post = require("../../models/postModel");

const createPostController = async (req, res) => {
  const { description, image } = req.body;
  const author = req.user.userId;

  try {
    const newPost = new Post({
      description,
      image,
      author,
    });

    await newPost.save();

    res
      .status(201)
      .json({ message: "Post created successfully", post: newPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = createPostController;
