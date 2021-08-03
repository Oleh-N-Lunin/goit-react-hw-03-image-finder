function ImageGalleryItem({webformatURL,tags,largeImageURL,onClick,}) {
    return (
        <li onClick={() => onClick(largeImageURL, tags)}>
            <img src={webformatURL} alt={tags} />
        </li>
    );
}

export default ImageGalleryItem;