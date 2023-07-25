import "./SnippetSelector.css";
import ItemCard from "./ItemCard";

const SnippetSelector = () => {
  const snippets = [
    {id: "1", name: "Javascript", cant: "34"},
    {id: "2", name: "Vue", cant: "10"},
    {id: "3", name: "React", cant: "24"},
    {id: "4", name: "Svelt", cant: "5"},
  ]
  return (
    <div className="home-SnippetSelector">
      <div className="home-SnippetSelector_selector">
        <h3 className="home-SnippetSelector_title">Categories</h3>
        <ul className="home-SnippetSelector_list">
          {
            snippets.map(elem => (
              <li>
                <ItemCard pTitle={elem.name} hasImage={false} pIcon="deployed_code" pText={`${elem.cant} snippets`} />
              </li>
            ))
          }
        </ul>
      </div>
      <div className="home-SnippetSelector_details">
        <h3 className="home-SnippetSelector_title">Snippett</h3>
        <div>
          <ul className="home-SnippetSelector_list">
            <li className="home-SnippetSelector_card"><h4>imr - Import React</h4></li>
            <li className="home-SnippetSelector_card"><h4>cc - Class Component</h4></li>
            <li className="home-SnippetSelector_card"><h4>cpc - Class Pure Component</h4></li>
            <li className="home-SnippetSelector_card"><h4>imr - Import React</h4></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SnippetSelector;
