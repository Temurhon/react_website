//Allow us to hook my React application to index.html 
import React from 'react';
import ReactDom from 'react-dom';

import App from './App';

//Rendeding the application by adding the component App and render this inside of this id, which is the div id(root).
ReactDom.render(<App />, document.getElementById('root'));