//  React and Redux
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import store from './Redux/Store/Store';

//  Stylesheet
import './Styles/style.css';

//  React Main Component
import MainDiv from './Components/MainDiv.js';

//  Load the Web Fonts using Font Face Observer API
import FontFaceObserver from 'fontfaceobserver';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
    <MainDiv />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



//  Load the web fonts so that the canvas can draw the correct font family correctly
//  All the fonts loaded from the web shall be listed here
const webFonts = ['Orbitron', 'Roboto', 'Grandstander', 'Marvel', 'Cantora One'];

webFonts.forEach( font => {
    const fontObj = new FontFaceObserver(font);
    fontObj.load().then( (e) => {
      
    }).catch( (e) => {
        console.log( "Loading of Web Font '" + font + "' Failed!");
    });
});