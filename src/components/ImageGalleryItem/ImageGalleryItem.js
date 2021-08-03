import "../styles/styles.css";

function ImageGalleryItem({
    webformatURL,
    tags,
    largeImageURL,
    onClick,
    }) {
    return (
        <li
            className="ImageGalleryItem"
            onClick={()=> onClick(largeImageURL,tags)}
        >
            <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
        </li>
    );
}

export default ImageGalleryItem;