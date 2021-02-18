import store from './data/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import reportWebVitals from './reportWebVitals';


let renderTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <App state={state} dispatch={store.dispatch.bind(store)} store={store}/> 
      </React.StrictMode>,
      document.getElementById('root')
    );
    reportWebVitals();
  }

renderTree(store.getState());

store.subscribe(()=>{renderTree(store.getState())});
 