import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <div>
      < img id="pic1" 
      alt="bear standing in river"
      src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Kamchatka_Brown_Bear_near_Dvuhyurtochnoe_on_2015-07-23.jpg"/>
      <h1>Hi! I'm Barry, the Brown Bear</h1>

      <img id="bee" src="https://i.pinimg.com/originals/02/ce/79/02ce7945c01a4d62f78e480ca9c51f00.gif" width="100px" />

      <div id="profile">
        <h2>PROFILE</h2>
        <p>
          A friendly neighbourhood bear looking for new friends :) 

        </p>
      </div>

      <div id="hobbies">
      <h2> HOBBIES</h2>
      <ul>
        <li>Fishing for salmon</li>
        <li>Hunting for berries and honey </li>
        <li>Hibernating for most of my life </li>
      </ul>
      </div> 
    </div>

  );
}

export default App;
