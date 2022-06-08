import React from 'react';
import AnimalList from '../AnimalList/AnimalList.js';
import backgroundImage from '../background.png';
import './Main.css';

export default function Main({ animals }) {
  return (
    <main style={{ backgroundImage: `url(${backgroundImage})` }}>
      
      <AnimalList animals={animals} />
    </main>
  );
}
