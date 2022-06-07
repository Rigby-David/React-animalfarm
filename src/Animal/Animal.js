

export default function AnimalCard({ name, type, says }) {
  return (
    <div>
      <img src={`/animals/${type}.png`} />
      <p>{name}</p>
      <p>{says}</p>
    </div>
  );
}