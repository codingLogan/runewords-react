import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/runewords">Runewords</Link>
          </li>
          <li>
            <Link to="/runes">Runes</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default App;
