import React, { useState } from "react";
import { uploadMedia } from "./uploadMedia";
import MediaPreview from "./MediaPreview";

const UploadForm = () => {
  const [formData, setFormData] = useState({ media: [] });

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const uploadedMedia = await uploadMedia(file);
      setFormData((prevData) => ({
        ...prevData,
        media: [...prevData.media, uploadedMedia.url],
      }));
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <div>
      <h2>Upload Media (Image or Video)</h2>
      <input type="file" onChange={handleUpload} accept="image/*,video/*" />
      <MediaPreview media={formData.media} />{" "}
    </div>
  );
};

export default UploadForm;
