import React from "react";

import "../Styles/styles.css";

export default function ImageGalleryItem({
  webformatURL,
  tags,
  largeImageURL,
  onClick,
}) {
  return (
    <li
      onClick={() => onClick(largeImageURL, tags)}
      className="ImageGalleryItem"
    >
      <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
    </li>
  );
}