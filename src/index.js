import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';
import {BrowserRouter} from 'react-router-dom';



let rerenderET = (props) => {
  ReactDOM.render( 
    <BrowserRouter>
    <React.StrictMode>
      <App state={store.getState()} subscribe={store.subscribe}
       addPost={store.addPost.bind(store)} 
       updateNewPostText={store.updateNewPostText.bind(store)}/>
    </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

rerenderET(store.getState());

store.subscribe(rerenderET); 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
