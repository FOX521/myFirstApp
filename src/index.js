import store from './data/state';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import reportWebVitals from './reportWebVitals';

let renderTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <App state={state} addPost={store.addPost.bind(store)} addUpdate={store.addUpdate.bind(store)} /> 
      </React.StrictMode>,
      document.getElementById('root')
    );
    reportWebVitals();
  }

renderTree(store.getState());

store.subscriber(renderTree);
 