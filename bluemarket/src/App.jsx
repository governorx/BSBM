//Import statements for each component.
import React from 'react';
import './App.css';
import Topbar from './components/Topbar.jsx';
<<<<<<< HEAD
import Categories from './components/Categories.jsx';
=======
import Homepage from './components/Homepage';
import Supportbar from './components/Supportbar';

>>>>>>> origin/master

function App() {
  return (
    /*
    * Topbar and Homepage are called in this manner to reduce LOC.
    * Their code is located in the components folder.
    */
    <div className="App">
<<<<<<< HEAD
      <Topbar />
     

=======
            <Topbar/>
            <Homepage/>
            <Categories />
              <Supportbar/>


>>>>>>> origin/master
    </div>
  );
}

export default App;
