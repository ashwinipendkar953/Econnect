const User = require("../../models/userModel");

const getAllUsersController = async (req, res) => {
  try {
    const usersData = await User.find();

    if (!usersData || usersData.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }

    // Map over usersData to return only required fields
    const users = usersData.map(({ _id, profilePic, fullName, username }) => ({
      id: _id,
      profilePic,
      fullName,
      username,
    }));

    res.status(200).json({ message: "Users data fetched successfully", users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = getAllUsersController;
