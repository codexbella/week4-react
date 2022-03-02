import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import GalleryItem, {GalleryItemDetailed} from "./GalleryItem";
import {Character} from "./characterModel";

export default function GalleryItemDetail() {
    const params = useParams();
    const [character, setCharacter] = useState({} as Character);

    useEffect(() => {
            fetch('https://rickandmortyapi.com/api/character/'+params.characterId)
                .then(response => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    throw new Error('Fehler mit Fehlercode: '+response.status)
                })
                .then((result: Character) => setCharacter(result))
                .catch(e => console.log(e.message)
            )}
        , [params.characterId]);

    return (
        <div>
            { character.id && <GalleryItemDetailed character={character}/> }
        </div>
    )
}