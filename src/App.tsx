import React from 'react';
import './App.css';
import {Link, Outlet} from "react-router-dom";

function App() {
  return (
      <div id="all-of-it-wrapper-app">
          <div><h1 className='gallery-title'>Rick and Morty Gallery</h1></div>
          <button className='button'><Link to='/gallery' className='gallery-link'>Galerie</Link></button>
          <div><Outlet /></div>
      </div>
  );
}

export default App;