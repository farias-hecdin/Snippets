import "./NavbarMain.css";
import { ButtonGhost } from "./../Index.jsx";

const NavbarMain = () => {
  return (
    <div className="NavbarMain">
      <div className="NavbarMain_wrap --stickyTop">
        <ButtonGhost pText="Snippets" pIcon="category" mod="is-vert" />
        <ButtonGhost pText="Selected" pIcon="checklist" mod="is-vert" />
        <ButtonGhost pText="Export" pIcon="ios_share" mod="is-vert" />
      </div>
      <div className="NavbarMain_wrap --styckyBottom">
        <ButtonGhost pText="Info" pIcon="info" mod="is-vert" />
      </div>
    </div>
  );
};

export default NavbarMain;
