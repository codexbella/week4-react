import GalleryItem from "./GalleryItem";
import data from './Characters.json';
import './Gallery.css';

export default function Gallery() {
    const items = data
        .map(c => <GalleryItem character={{name: c.name, imageUrl: c.image, status: c.status, species: c.species, location: c.location.name}} />);

    return (
        <div id="gallery">
            { items }
        </div>
    );
}