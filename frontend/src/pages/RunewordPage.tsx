import { getAllWords } from "@diablo-tools/d2-runewords";
import RunewordComponent from "../components/Runeword";

const RunewordPage = () => {
  const words = getAllWords();

  return words.map((word) => <RunewordComponent word={word} key={word.name} />);
};

export default RunewordPage;
