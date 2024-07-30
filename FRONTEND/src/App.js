import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./componets/Navbar";
import LandingPage from "./componets/landingPage";

const App = () => {
  return (
    <Router>
      <Navbar/>
      <LandingPage/>
    </Router>
  );
};

export default App;
