const User = require("../../models/userModel");

const deleteBookmarkController = async (req, res) => {
  const postId = req.params.postId;
  const authenticatedUserId = req.user.userId;
  try {
    const user = await User.findByIdAndUpdate(
      authenticatedUserId,
      { $pull: { bookmark: postId } },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Bookmark deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = deleteBookmarkController;
