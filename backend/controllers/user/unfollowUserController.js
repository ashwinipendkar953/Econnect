const User = require("../../models/userModel");

const unfollowUserController = async (req, res) => {
  const userIdToUnfollow = req.params.id;
  const authenticatedUserId = req.user.userId;

  try {
    // Check if the user to unfollow exists
    const userToUnfollow = await User.findById(userIdToUnfollow);
    if (!userToUnfollow) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the authenticated user is actually following the user to unfollow
    if (!userToUnfollow.followers.includes(authenticatedUserId)) {
      return res
        .status(400)
        .json({ message: "You are not following this user" });
    }

    // Remove the authenticated user from the target user's followers array
    await User.findByIdAndUpdate(
      userIdToUnfollow,
      { $pull: { followers: authenticatedUserId } },
      { new: true }
    );

    // Remove the target user from the authenticated user's following array
    await User.findByIdAndUpdate(
      authenticatedUserId,
      { $pull: { following: userIdToUnfollow } },
      { new: true }
    );

    res.status(200).json({ message: "User unfollowed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = unfollowUserController;
