import { animals } from '../data.js';

export default function AnimalCard({ name, type, says }) {
  return (
    <div>
      <img />
      <p>{name}</p>
      <p>{says}</p>
    </div>
  );
}