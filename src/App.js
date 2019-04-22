import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import react from './react.png';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <img src={react} className="logo-react" alt="react-logo" />
          <p className="paragraphe1">
          this is the universal <code>react logo</code>
          </p>
          <hr></hr>
          <br
          ></br>
          <a
            className="link"
            href="https://ada.gomycode.tn/skills/c12c7cea-9861-4786-b83f-faceb20ecb7d"
            target="_blank"
            rel="link"
          >
          <p className="paragraphe2">
            If you want to know more click here
          </p>
          </a>
          
        </header>

      </div>
    );
  }
}

export default App;
