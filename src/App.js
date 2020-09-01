import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Footer from './components/Footer/Footer';
import {Route} from 'react-router-dom';

const App = (props) =>{
  
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='app-content'>
        <Route path='/content' component={ () => 
        <Content 
        dispatch={props.store.dispatch}
        contentReducer={props.store.getState().contentReducer} 
        //store={props.store}
        />}/>
        <Route path='/dialogs' component={ () => 
        <DialogsContainer 
        store={props.store}
        //store={props.state.dialogsPage}
        //dispatch={props.dispatch}
        />}/>
      </div>
      <Footer />
    </div>
  );
}
 
export default App;
