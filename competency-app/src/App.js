import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Header H1</h1>
        <div className= "classy-div">classy div</div>
        <div id="superawesome-div">superawesome div
          <div>
            I am a child element. 
          </div>
          <section>
            I am that ^ element's sibling
              <p>
                I am a descendent. 
              </p>
          </section>
        </div>

      </div>
    );
  }
}

export default App;
