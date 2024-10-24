// backend/controllers/uploadController.js
const cloudinary = require("../../config/cloudinaryConfig");

const uploadMediaController = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: req.file.mimetype.startsWith("video") ? "video" : "image",
    });

    res.status(200).json({
      message: "Upload successful",
      url: result.secure_url,
      public_id: result.public_id,
    });
  } catch (error) {
    console.error("Upload failed:", error);
    res.status(500).json({ error: "Upload failed" });
  }
};

module.exports = uploadMediaController;
