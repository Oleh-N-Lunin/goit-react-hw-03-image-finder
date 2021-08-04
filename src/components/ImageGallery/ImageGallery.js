import React from "react";

import "../Styles/styles.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

export default function ImageGallery({ arrayImages, onSubmit }) {
  return (
    <ul className="ImageGallery">
      {arrayImages.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          tags={tags}
          largeImageURL={largeImageURL}
          onClick={onSubmit}
        />
      ))}
    </ul>
  );
}