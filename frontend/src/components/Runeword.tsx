import { Runeword } from "@diablo-tools/d2-runewords/dist/types/runeword";

const RunewordComponent = ({ word }: { word: Runeword }) => {
  return (
    <div className="card">
      <h2>
        {word.name} <i style={{ fontSize: "0.5em" }}>Lvl {word.level}</i>
      </h2>
      <div>{word.runeOrder.join(" -> ")}</div>

      <p style={{ textDecorationLine: "underline" }}>
        {word.itemType.join(", ")}
      </p>

      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {word.effects.map((effect, index) => (
          <li key={index + word.name}>{effect}</li>
        ))}
      </ul>
    </div>
  );
};

export default RunewordComponent;
