import "./LangSelector.css";
import loremImage from "../../assets/cplusplus.svg";
import { ProgLangList } from "../../datas/ProgLangList.jsx";
import ItemCard from "./ItemCard.jsx";

const LangSelector = () => {
  const dataLang = ProgLangList.languages;

  return (
    <div className="home-LangSelector">
      <h2 className="home-LangSelector_title">Languages</h2>
      <ul className="home-LangSelector_list">
        {dataLang.map((elem) => (
          <li key={elem.id}>
            <ItemCard
              pTitle={elem.name}
              pText={
                elem.id < 10 ? `${elem.id} category` : `${elem.id} categories`
              }
              pImage={(true) ? elem.logo : loremImage}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LangSelector;
