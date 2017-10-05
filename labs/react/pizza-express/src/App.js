import React, { Component } from 'react';
import NavBar from './components/NavBar.jsx'
import Splash from './components/Splash.jsx'
import Description from './components/Description.jsx'
import MenuList from './components/MenuList.jsx'
import LocationList from './components/LocationList.jsx'
import Contact from './components/Contact.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Splash />
        <Description />
        <MenuList />
        <LocationList />
        <Contact />
      </div>
    );
  }
}

export default App;
