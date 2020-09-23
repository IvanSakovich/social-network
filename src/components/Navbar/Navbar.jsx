import React from 'react';
import './../../App.css';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () =>{
  return (
    <div className={s.nav}>
      <div className={s.item}> 
      <NavLink to="/content" activeClassName={s.active}>Profile</NavLink></div>
      <div className={s.item}>
      <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink></div>
      <div className={s.item}> 
      <NavLink to='/users' activeClassName={s.active}>Users</NavLink></div>
      <div className={s.item}>
      <NavLink to='/news' activeClassName={s.active}>News</NavLink></div>
      <div className={s.item}>
      <NavLink to='/music' activeClassName={s.active}>Music</NavLink></div>
      <div className={s.item}>
      <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink></div>
      
    </div>
  );
}

export default Navbar;
