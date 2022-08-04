import Navbar from "./Navbar";
import Logo from "./img/Logo.png";
import Filter from "./container/Filter";
import "./App.css";

function App() {
  return (
    <div>
      <img src={Logo} alt="logo" className="logo"/>
      <Navbar />
      <Filter />
    </div>
  );
}

export default App;
