import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Gallery from "./ricknmorty/Gallery";
import GalleryItemDetail from "./ricknmorty/GalleryItem/GalleryItemDetail";
import {BrowserRouter, Route, Routes} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<App />}>
                  <Route path='gallery' element={<Gallery />}/>
                  <Route path='gallery/:characterId' element={<GalleryItemDetail />}/>
                  <Route path='*' element={<Gallery/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
