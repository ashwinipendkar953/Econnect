const logoutController = (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (token) {
    blacklistedTokens.add(token); // Add token to blacklist
  }
  res.status(200).json({ message: "Logged out successfully" });
};

module.exports = logoutController;
