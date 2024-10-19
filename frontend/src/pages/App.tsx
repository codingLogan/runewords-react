import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

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
