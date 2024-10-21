const User = require("../../models/userModel");

const getUserController = async (req, res) => {
  const userId = req.params.id;
  const authenticatedUser = req.user;

  try {
    if (authenticatedUser.userId !== userId) {
      return res
        .status(403)
        .json({ message: "You do not have permission to see this user" });
    }

    const userData = await User.findById(userId);

    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }

    const { password, updatedAt, ...user } = userData._doc;

    res.status(200).json({ message: "User data fetched successfully", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = getUserController;
