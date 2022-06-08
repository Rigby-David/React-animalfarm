import React from 'react';

export default function Animal({ name, type, says }) {
  return (
    <div>
      <img src={`/animals/${type}.png`} />
      <p>{name}</p>
      <p>{says}</p>
    </div>
  );
}