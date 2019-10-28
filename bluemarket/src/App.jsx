//Import statements for each component.
import React from 'react';
import './App.css';
import Topbar from './components/Topbar.jsx';
import Homepage from './components/Homepage';


function App() {
  return (
    /*
    * Topbar and Homepage are called in this manner to reduce LOC.
    * Their code is located in the components folder.
    */
    <div className="App">
            <Topbar/>
            <Homepage/>
    </div>
  );
}

export default App;
