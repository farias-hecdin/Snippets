import "./HeaderMain.css";
import { ButtonGhost } from "./../Index.jsx";

function HeaderMain() {
  return (
    <header className="HeaderMain">
      <h1 className="HeaderMain_logo">Friendly Snippets</h1>
      <ButtonGhost pIcon="dark_mode" pText="Theme" />
    </header>
  );
}

export default HeaderMain;
