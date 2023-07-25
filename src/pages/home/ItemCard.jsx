import "./ItemCard.css";

const ItemCard = ({ hasImage = true, pImage, pTitle, pText, pIcon }) => {
  const theImage = hasImage;

  return (
    <div className="home-ItemCard">
      <div className="home-ItemCard_media">
        {
          (theImage == true)
            ? <img className="home-ItemCard_image" src={pImage} alt={pTitle} />
            : <i className="home-ItemCard_icon material-symbols-outlined">{pIcon}</i>
        }
      </div>
      <div className="home-ItemCard_content">
        <span className="home-ItemCard_title">{pTitle}</span>
        <span className="home-ItemCard_text">{pText}</span>
      </div>
    </div>
  );
};

export default ItemCard;
