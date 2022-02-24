import GalleryItem from "./GalleryItem";
import data from './Characters.json';
import './Gallery.css';
import {useEffect, useState} from "react";
import {Character, ResponseBody} from "./characterModel";
import {resolveAny} from "dns";

export default function Gallery() {
    const [searchTerm, setSearchTerm] = useState('');

/*    const items = data
        .filter(e => e.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .map(c => <GalleryItem character={
            {name: c.name, imageUrl: c.image, status: c.status, species: c.species, location: c.location.name}} />);*/

    const [characterData, setCharacterData] = useState([] as Array<Character>);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(r => {
                return r.json();
            })
            .then((rBody: ResponseBody) => {
                setCharacterData(rBody.results);
            });
    }, []);

    return (
        <div id='body-site'>
            <div><h1 className='gallery-title'>Rick and Morty Gallery</h1></div>
            <div><input type='text' placeholder='Type in search term' value={searchTerm} onChange={typed => setSearchTerm(typed.target.value)} className='search-field'/></div>
            <div id="gallery">
                {
                    characterData.length > 0
                    ?
                        characterData.filter(e => e.name.toLowerCase().includes(searchTerm.toLowerCase()))
                            .map(c => <GalleryItem character={c} />)
                        :
                        <div>List is empty or there was an error.</div>
                }
            </div>
        </div>
    );
}