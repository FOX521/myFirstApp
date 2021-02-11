import state, { subscriber } from './data/state';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import reportWebVitals from './reportWebVitals';

let renderTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <App state={state} />
      </React.StrictMode>,
      document.getElementById('root')
    );
    reportWebVitals();
  }

renderTree(state);

subscriber(renderTree);
 