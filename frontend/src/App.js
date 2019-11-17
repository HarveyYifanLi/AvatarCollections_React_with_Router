import React from 'react';
import {NavLink} from 'react-router-dom';
import SwitchRoutes from './SwitchRoutes';
import './App.css';

const s={color: "red", fontWeight: "bold"}; //active style for navlink
const navs={margin: "5px"}; // default style for navlink

function App() {
  return (
    <div className="App">
      <NavLink exact activeStyle={s} to="/" style={navs}>
        HOME
      </NavLink>
      <NavLink exact activeStyle={s} to="/about" style={navs}>
        ABOUT
      </NavLink>
      <NavLink exact activeStyle={s} to="/AvatarList" style={navs}>
        AVATARLIST
      </NavLink>
      <div>
        <SwitchRoutes/>
      </div>
    </div>
  );
}

export default App;
