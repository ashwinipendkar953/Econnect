// frontend/src/components/MediaPreview.js
import React from "react";

const MediaPreview = ({ media }) => {
  return (
    <div>
      <h3>Uploaded Media</h3>
      {media.map((url, index) => (
        <div key={index}>
          {url.endsWith(".mp4") || url.includes("video") ? (
            <video src={url} controls width="300" />
          ) : (
            <img src={url} alt="Uploaded" width="300" />
          )}
        </div>
      ))}
    </div>
  );
};

export default MediaPreview;
