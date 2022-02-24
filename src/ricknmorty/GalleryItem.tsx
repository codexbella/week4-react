import { JsxElement } from "typescript";
import { Character } from "./characterModel";
import './GalleryItem.css';

interface GalleryItemProps {
    character: Character;
}

function GalleryItem(props: GalleryItemProps) {
    return (
        <div className="gallery-item">
            <h1 className="gallery-item-title">{ props.character.name }</h1>
            <div><img src={props.character.image} className="gallery-item-image" /></div>
            <div>
                <ul className="gallery-item-description">
                    <li>{ props.character.status }</li>
                    <li>{ props.character.species }</li>
                    <li>{ props.character.location.name } </li>
                </ul>
            </div>
        </div>
    )
}

export default GalleryItem;