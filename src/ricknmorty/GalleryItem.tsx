import { JsxElement } from "typescript";
import { Character } from "./characterModel";
import './GalleryItem.css';

interface GalleryItemProps {
    character: Character;
}

function GalleryItem(props: GalleryItemProps) {
    return (
        <div className="gallery-item">
            <h1 className="gallery-item-title" data-testid="gallery-item-name">{ props.character.name }</h1>
            <div><img src={props.character.image} className="gallery-item-image"  data-testid="gallery-item-image"/></div>
            <div>
                <ul className="gallery-item-description">
                    <li data-testid="gallery-item-status">{ props.character.status }</li>
                    <li data-testid="gallery-item-species">{ props.character.species }</li>
                    <li data-testid="gallery-item-location-name">{ props.character.location.name }</li>
                </ul>
            </div>
        </div>
    )
}

export default GalleryItem;