import "./ButtonGhost.css";

const ButtonGhost = ({ handleClick, styled, mod, pIcon, pText, pType }) => {
  return (
    <button
      type={pType}
      className={`ButtonGhost ${styled} ${mod}`}
      onClick={handleClick}
    >
      <span className="ButtonGhost_figure">
        <i className="ButtonGhost_icon material-symbols-outlined no--select">
          {pIcon}
        </i>
      </span>
      <span className="ButtonGhost_text no--select">{pText}</span>
    </button>
  );
};

export default ButtonGhost;
