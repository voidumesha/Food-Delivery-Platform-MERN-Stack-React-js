import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './pages/Navbar';
import MapRoute from './pages/mapRoute';


const App = () => {
  return (
    <Router>
      <Navbar />
      <MapRoute/>
      
     
      
    </Router>
  );
};

export default App;
