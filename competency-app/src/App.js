import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import catjpg from './img/bigcat.jpg'
import dooter from './img/doot.gif'

class App extends Component {
  render() {
    return (
      <div className="App">
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
        <div id="nic"></div>

        <h3 style={{letterSpacing:"8px", fontFamily:"monospace", fontWeight:"1"}}>flexbox fun</h3> {/* 54J style attribute*/}
        <div id="flexbox">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>

        </div>
        <div className="container">
          <div id="boxshadow">
          </div>
          <div id="gradient"></div>
          <div id="texteffect"> fancy text who examines the contents of a time capsule unearthed at his son's elementary school. Startling predictions found inside the capsule that have already come true lead him to believe that the world is going to end at the close of the week, and that he and his son are somehow involved in the destruction.[38] The film received mainly negative reviews but was the box office winner on its opening weekend
          </div>
        </div>
      
        <div id='grid'>
          <div className='grid-row'>
            <div id='one'>some grid elements </div>
            <div id='two'> </div>
            <div id='three'> </div>
          </div>   

        </div>
          {/* HTML 5 SECTION */}
        <div>  
          <p>p tag</p> {/*  54C*/}
          <span>span tag</span> {/*  54C */}
          <div>a w i l d d i v a p p e a r e d !</div> {/*  54C */}
          <br/>{/*  54G */}
          <section>a section ! </section>    {/*  54D */}
          <article>article</article>
          <footer>foot</footer>
          <a href='http://www.lingscars.com'>award winning website</a>{/* 54H */}
          <html>        {/* 54I */}
              <head></head>
              <body id='doot'>skeletn</body>
          </html>
        </div>
  


      </div>
    );
  }
}

export default App;
