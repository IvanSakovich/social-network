import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import Dialogs from './components/Dialogs/Dialogs';
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
        dispatch={props.dispatch}
        store={props.state.contentPage} 
        />}/>
        <Route path='/dialogs' component={ () => 
        <Dialogs 
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
