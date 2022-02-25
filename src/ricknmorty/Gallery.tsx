import GalleryItem from "./GalleryItem";
import data from './Characters.json';
import './Gallery.css';
import {useEffect, useState} from "react";
import {Character} from "./characterModel";

export default function Gallery() {
    interface Pages {
        pages: number;
        next: string;
        prev: string;
    }

    interface ResponseHead {
        info: Array<Pages>;
    }

    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(1);

    const [characterData, setCharacterData] = useState([] as Array<Character>);
    const [siteInfo, setSiteInfo] = useState({} as Pages);

    useEffect(() => {
            fetch('https://rickandmortyapi.com/api/character?page=' + page)
                .then(response => response.json())
                .then(data => {
                    setCharacterData(data.results)
                    setSiteInfo(data.info)
                }).catch(() => console.log('hm...'))
        }
        , [page]);

    return <div id='gallery-wrapper'>
        <div><h1 className='gallery-title'>Rick and Morty Gallery</h1></div>
        <div id='search-field-buttons-wrapper'>
            <input type='text' placeholder='Type in search term' value={searchTerm}
                   onChange={typed => setSearchTerm(typed.target.value)} className='search-field'/>
            <div className='page-button-wrapper'>
                {siteInfo.prev && <button onClick={() => setPage(page - 1)} className='page-buttons'>&lt;&lt;</button>}
                <p className='page-indicator'>page {page}</p>
                {siteInfo.next && <button onClick={() => setPage(page + 1)} className='page-buttons'>&gt;&gt;</button>}
            </div>
        </div>

        <div id="gallery">
            {
                characterData.length > 0
                    ?
                    characterData.filter(e => e.name.toLowerCase().includes(searchTerm.toLowerCase()))
                        .map(c => <GalleryItem character={c}/>)
                    :
                    <div>List is empty or there was an error.</div>
            }
        </div>
    </div>
}