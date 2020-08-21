import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import Dialogs from './components/Dialogs/Dialogs';
import Footer from './components/Footer/Footer';
import {Route, BrowserRouter} from 'react-router-dom';

const App = (props) =>{
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='app-content'>
        <Route path='/content' component={Content}/>
        <Route path='/dialogs' component={Dialogs}/>
      </div>
      <Footer />
    </div>
    </BrowserRouter>
  );
}
 
export default App;
