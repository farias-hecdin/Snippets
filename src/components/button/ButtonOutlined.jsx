import "./ButtonOutlined.css";

/**
 * @param {object} obj
 * @param {function} obj.handleClick
 * @param {string} obj.pIcon
 * @param {string} obj.pType
 * @param {string} obj.pText
 * @param {string} obj.pVariant
 */

const ButtonOutlined = ({ handleClick, pIcon, pText, pType, pVariant }) => {
  return (
    <button
      type={pType}
      className={`ButtonOutlined ${pVariant}`}
      onClick={handleClick}
    >
      <i className="ButtonOutlined_icon" data-icon="material-symbols-outlined">
        {pIcon}
      </i>
      <span className="ButtonOutlined_text">{pText}</span>
    </button>
  );
};

export default ButtonOutlined;
