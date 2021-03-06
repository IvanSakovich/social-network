import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

let rerenderET = (props) => {
  ReactDOM.render( 
    <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
      <App 
      //state={store.getState()} 
      store={store}
      //dispatch={store.dispatch.bind(store)}
      />
      </Provider>
    </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
}
rerenderET();
//rerenderET(store.getState());

//store.subscribe(() => {
//  let state = store.getState();
//  rerenderET(state);
//}); 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
