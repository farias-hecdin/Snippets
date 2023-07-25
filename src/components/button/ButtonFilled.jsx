import "./ButtonFilled.css";

/**
 * @param {object} obj
 * @param {function} obj.handleClick
 * @param {string} obj.pIcon
 * @param {string} obj.pType
 * @param {string} obj.pText
 * @param {string} obj.pVariant
 */

const ButtonFilled = ({ handleClick, pIcon, pText, pType, pVariant }) => {
  return (
    <button
      type={pType}
      className={`ButtonFilled ${pVariant}`}
      onClick={handleClick}
    >
      <i className="ButtonFilled_icon" data-icon="material-symbols-outlined">
        {pIcon}
      </i>
      <span className="ButtonFilled_text">{pText}</span>
    </button>
  );
};

export default ButtonFilled;
