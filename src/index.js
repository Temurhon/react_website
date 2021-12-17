//Allow us to hook my React application to index.html 
import React from 'react';
import ReactDom from 'react-dom';

//application js will be imported here
import App from './App';

//the css of this index js will be imported here
import './index.css';

//Rendeding the application by adding the component App and render this inside of this id, which is the div id(root).
ReactDom.render(<App />, document.getElementById('root'));