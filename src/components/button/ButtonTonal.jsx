import "./ButtonTonal.css";

/**
 * @param {object} obj
 * @param {function} obj.handleClick
 * @param {string} obj.pIcon
 * @param {string} obj.pType
 * @param {string} obj.pText
 * @param {string} obj.pVariant
 */

const ButtonTonal = ({ handleClick, pIcon, pText, pType, pVariant }) => {
  return (
    <button
      type={pType}
      className={`ButtonTonal ${pVariant}`}
      onClick={handleClick}
    >
      <i className="ButtonTonal_icon" data-icon="material-symbols-outlined">
        {pIcon}
      </i>
      <span className="ButtonTonal_text">{pText}</span>
    </button>
  );
};

export default ButtonTonal;
