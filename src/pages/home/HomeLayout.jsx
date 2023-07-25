import "./HomeLayout.css";
import { HeaderMain, NavbarMain } from "../../components/Index.jsx";
import LangSelector from "./LangSelector.jsx";
import SnippetSelector from "./SnippetSelector.jsx";

const HomeLayout = () => {
  return (
    <section className="home-HomeLayout">
      <NavbarMain />
      <main className="home-HomeLayout_container">
        <HeaderMain />
        <div>
          <LangSelector />
          <SnippetSelector />
        </div>
      </main>
    </section>
  );
};

export default HomeLayout;
