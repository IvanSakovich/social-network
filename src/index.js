import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';
import {BrowserRouter} from 'react-router-dom';
import {addPost} from './redux/store';

//export let rerenderET = () => {
  ReactDOM.render( 
    <BrowserRouter>
    <React.StrictMode>
      <App store={store} addPost={addPost}/>
    </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
//}
//rerenderET();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
