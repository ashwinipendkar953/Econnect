const User = require("../../models/userModel");

const updateUserController = async (req, res) => {
  const userIdToUpdate = req.params.id;
  const authenticatedUser = req.user;
  const { fullName, username, email, bio, mobileNumber, gender, birthday } =
    req.body;

  try {
    if (authenticatedUser.userId !== userIdToUpdate) {
      return res
        .status(403)
        .json({ message: "You do not have permission to update this user" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userIdToUpdate,
      { fullName, username, email, bio, mobileNumber, gender, birthday },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res
      .status(200)
      .json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = updateUserController;
