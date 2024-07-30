import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./componets/Navbar";
import LandingPage from "./componets/landingPage";
import Home from "./componets/Home";

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Home/>
      <LandingPage/>
    </Router>
  );
};

export default App;
