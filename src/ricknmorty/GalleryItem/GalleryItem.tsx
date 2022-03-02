import { Link } from 'react-router-dom';
import { Character } from "./characterModel";
import './GalleryItem.css';

interface GalleryItemProps {
    character: Character;
}

export default function GalleryItem(props: GalleryItemProps) {
    return (
        <div className="gallery-item">
            <h1 className="gallery-item-title" data-testid="gallery-item-name">{ props.character.name }</h1>
            <div>
                <Link to={'/gallery/'+props.character.id}>
                    <img src={props.character.image} className="gallery-item-image" data-testid="gallery-item-image" alt=''/>
                </Link>
            </div>
            <div>
                <ul className="gallery-item-description">
                    <li data-testid="gallery-item-status">{ props.character.status }</li>
                    <li data-testid="gallery-item-species">{ props.character.species }</li>
                </ul>
            </div>
        </div>
    )
}

export function GalleryItemDetailed(props: GalleryItemProps) {
    return (
        <div className="gallery-item">
            <h1 className="gallery-item-title" data-testid="gallery-item-name">{ props.character.name }</h1>
            <img src={props.character.image} className="gallery-item-image" data-testid="gallery-item-image" alt=''/>
            <div>
                <ul className="gallery-item-description">
                    <li data-testid="gallery-item-status">{ props.character.status }</li>
                    <li data-testid="gallery-item-species">{ props.character.species }</li>
                    <li data-testid="gallery-item-gender">{ props.character.gender }</li>
                    <li data-testid="gallery-item-location-name">Location: { props.character.location.name }</li>
                    <li data-testid="gallery-item-origin">Origin: { props.character.origin.name }</li>
                </ul>
            </div>
        </div>
    )
}