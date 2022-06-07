import AnimalCard from '../Animal/Animal';
import { animals } from '../data.js';

export default function Main() {
  return (
    <main>
      {animals.map((zodiac, i) => (
        <AnimalCard {...animals} key={animals.name + i} />
      ))}
    </main>
  );
}
