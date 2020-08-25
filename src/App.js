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
        <Route path='/content' component={ () => <Content store={props.store.contentPage} addPost={props.addPost}/>}/>
        <Route path='/dialogs' component={ () => <Dialogs store={props.store.dialogsPage}/>}/>
      </div>
      <Footer />
    </div>
  );
}
 
export default App;
