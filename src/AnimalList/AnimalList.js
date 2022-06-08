import React from 'react';
import Animal from '../Animals/Animal.js';
export default function AnimalList({ animals }) {
  return (
    <div>
      {
        animals.map((animal, i) =>
          <Animal {...animal}
            key={animal.name + i}/>)
      }
    </div>
  );
}