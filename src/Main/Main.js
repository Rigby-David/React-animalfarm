import React from 'react';
import AnimalCard from '../Animal/Animal';
import { animals } from '../data.js';
import backgroundImage from '../background.png';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${backgroundImage})` }}>
      {animals.map((zodiac, i) => (
        <AnimalCard {...animals} key={animals.name + i} />
      ))}
    </main>
  );
}
