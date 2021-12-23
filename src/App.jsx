import "./app.css";
import Intro from './components/Intro'
import About from "./components/About";
import ProductList from "./components/ProductList";
import Contact from "./components/Contact";
import {useContext} from "react";
import {ThemeContext} from "./context";
import Toggle from "./components/Toggle";

const App = () =>
{
    const theme =useContext(ThemeContext)
    const darkMode=theme.state.darkMode
  return (
      <div className="container"
          style={{ backgroundColor: darkMode ? "#222" : "white",  color: darkMode && "white" }}>
          <Toggle />
          <Intro/>
          <About/>
          <ProductList/>
          <Contact/>
      </div>
  );
};

export default App;
