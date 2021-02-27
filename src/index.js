import store from './data/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';



let renderTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
  reportWebVitals();
}

renderTree(store.getState());

store.subscribe(() => { renderTree(store.getState()) });
