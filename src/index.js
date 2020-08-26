import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store, { subscribe } from './redux/store';
import {BrowserRouter} from 'react-router-dom';
import {addPost, updateNewPostText} from './redux/store';


let rerenderET = (props) => {
  ReactDOM.render( 
    <BrowserRouter>
    <React.StrictMode>
      <App store={store} addPost={addPost} updateNewPostText={updateNewPostText}/>
    </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

rerenderET(store);

subscribe(rerenderET);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
