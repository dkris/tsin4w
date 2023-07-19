import React from 'react';
import logo from './logo.svg';
import './App.css';
import  User from './User/User';
import getLength from './Util/Util';

function App() {
  const user: User<string> ={
    name: "Johnny Appleseed",
    id: 2
  };
  let length = getLength(user.name);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {user.name}
          {length}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
