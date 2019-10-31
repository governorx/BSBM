//Import statements for each component.
import React from 'react';
import './App.css';
import Topbar from './components/Topbar.jsx';
import Categories from './components/Categories.jsx';
import Homepage from './components/Homepage';
import Supportbar from './components/Supportbar';


function App() {
  return (
    /*
    * Topbar and Homepage are called in this manner to reduce LOC.
    * Their code is located in the components folder.
    */
    <div className="App">
            <Topbar/>
            <Homepage/>
            <Categories/>
            <Supportbar/>
    </div>
  );
}

export default App;
