import GalleryItem from "./GalleryItem";
import data from './Characters.json';
import './Gallery.css';
import {useState} from "react";

export default function Gallery() {
    const [searchTerm, setSearchTerm] = useState('');

    const items = data
        .filter(e => e.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .map(c => <GalleryItem character={
            {name: c.name, imageUrl: c.image, status: c.status, species: c.species, location: c.location.name}} />);

    return (
        <div id='body-site'>
            <h1 className='gallery-title'>Rick and Morty Gallery</h1>
            <input type='text' placeholder='Type in search term' value={searchTerm} onChange={typed => setSearchTerm(typed.target.value)} className='search-field'/>
            <div id="gallery">
                { items }
            </div>
        </div>
    );
}