import { Link } from "react-router-dom";
import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <h1>Countries app</h1>
      <Link to="/countries">Tous les pays</Link>

    </header>
  );
}
