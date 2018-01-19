import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import catjpg from './img/bigcat.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="fixed-element">position: fixed</div>
        <h1 style={{letterSpacing:"8px", fontFamily:"monospace", fontWeight:"1"}}>a truly remarkable website</h1>
        <div className= "classy-div">classy div</div>
        <img id="catjpg" src={catjpg} height="200px" width="200px" alt="floating cat"/>
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
        <div id="box-model-holder">
          <div id="box-model">
              box model
              <div id="absolute-element">absolute element</div>
          </div>
        </div>
        <div id="invisible-div">inline-blocks -->
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>




        <br/>
        <br/>

        <span>focus input ==> </span>
        <input className="neat-input" id="abled"/>
        <span>input disabled ==> </span>
        <input className="neat-input" id="disabled" disabled="true"/>
        <br/><br/>
        <div id="hover"></div>
      
  


      </div>
    );
  }
}

export default App;
