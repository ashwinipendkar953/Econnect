const User = require("../../models/userModel");

const followUserController = async (req, res) => {
  const userIdToFollow = req.params.id;
  const authenticatedUserId = req.user.userId;

  try {
    // check the user is already following the target user
    const userToFollow = await User.findById(userIdToFollow);
    if (!userToFollow) {
      return res.status(404).json({ message: "User not found" });
    }

    if (userToFollow.followers.includes(authenticatedUserId)) {
      return res
        .status(400)
        .json({ message: "You are already following this user" });
    }

    // Add the authenticated user to the target user's followers array
    await User.findByIdAndUpdate(
      userIdToFollow,
      { $addToSet: { followers: authenticatedUserId } },
      { new: true }
    );

    // Add the target user to the authenticated user's following array
    await User.findByIdAndUpdate(
      authenticatedUserId,
      { $addToSet: { following: userIdToFollow } },
      { new: true }
    );

    res.status(200).json({ message: "User followed successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = followUserController;
