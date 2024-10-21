const User = require("../../models/userModel");

const deleteUserController = async (req, res) => {
  const userIdToDelete = req.params.id;
  const authenticatedUser = req.user;
  try {
    if (authenticatedUser.userId !== userIdToDelete) {
      return res
        .status(403)
        .json({ message: "You do not have permission to delete this user" });
    }

    const deletedUser = await User.findByIdAndDelete(userIdToDelete);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res
      .status(200)
      .json({ message: "User deleted successfully", user: deletedUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = deleteUserController;
