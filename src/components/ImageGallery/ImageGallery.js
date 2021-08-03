import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

import "../styles/styles.css";

function ImageGallery({ arrayImages, onSubmit }){
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

export default ImageGallery;