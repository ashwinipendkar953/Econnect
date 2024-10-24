// frontend/src/components/uploadMedia.js
import axios from "axios";

export const uploadMedia = async (mediaFile) => {
  const formData = new FormData();
  formData.append("media", mediaFile);

  try {
    const response = await axios.post(
      "http://localhost:8080/api/media/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(response.data);
    return response.data; // Return the uploaded media's data
  } catch (error) {
    console.error("Error uploading media:", error);
    throw error;
  }
};
