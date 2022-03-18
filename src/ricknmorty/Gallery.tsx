import GalleryItem from "./GalleryItem/GalleryItem";
import './Gallery.css';
import React, {useEffect, useState} from "react";
import {Character} from "./GalleryItem/characterModel";

export default function Gallery() {
   interface Pages {
      pages: number;
      next: string;
      prev: string;
   }
   
   const [characterData, setCharacterData] = useState([] as Array<Character>);
   const [siteInfo, setSiteInfo] = useState({} as Pages);
   
   const [errorMessage, setErrorMessage] = useState('');
   
   const [searchTerm, setSearchTerm] = useState('');
   const [page, setPage] = useState(localStorage.getItem('currentPage') ?? '1');
   
   useEffect(() => {
       localStorage.setItem('currentPage', page);
       fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
          .then(response => {
              if (response.status >= 200 && response.status < 300) {
                  setErrorMessage('');
                  return response.json();
              }
              throw new Error('Fehler mit Fehlercode: ' + response.status)
          })
          .then(data => {
              setCharacterData(data.results)
              setSiteInfo(data.info)
          }).catch(e => setErrorMessage(e.message))
      }
      , [page]);
   
   return <div id="all-of-it-wrapper-gallery">
      <div id='search-field-buttons-wrapper'>
         <input type='text' placeholder='Type in search term' value={searchTerm} data-testid='search-field'
                onChange={typed => setSearchTerm(typed.target.value)} className='search-field'/>
         <button className='button' onClick={() => setPage('1')}>Seite 1</button>
         {
            errorMessage
               ?
               <div>{errorMessage}</div>
               :
               <div className='page-button-wrapper'>
                  {siteInfo.prev && <button onClick={() => {
                     setPage(oldPage => `${parseInt(oldPage) - 1}`);
                     setSearchTerm('')
                  }}
                                            className='button' data-testid='page-button-back'>&lt;&lt;</button>}
                  <p className='page-indicator'>page {page}</p>
                  {siteInfo.next && <button onClick={() => {
                     setPage(oldPage => `${parseInt(oldPage) + 1}`);
                     setSearchTerm('')
                  }}
                                            className='button' data-testid='page-button-forward'>&gt;&gt;</button>}
               </div>
         }
      </div>
      
      <div id="gallery-wrapper">
         {
            characterData.length > 0
               ?
               characterData.filter(e => e.name.toLowerCase().includes(searchTerm.toLowerCase()))
                  .map((c, index) => <div data-testid='gallery-item' key={c.id}>
                     <GalleryItem character={c}/></div>)
               :
               <div className='gallery-item-title'>List is empty or there was an error.</div>
         }
      </div>
   </div>
}