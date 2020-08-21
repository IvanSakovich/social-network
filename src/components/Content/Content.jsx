import React from 'react';
import './../../App.css';
import s from './Content.module.css';
import MyPosts from './MyPosts/MyPosts';

const Content = () =>{
  return (
    <div>
      <img src='https://static3.depositphotos.com/1000454/256/i/450/depositphotos_2567474-stock-photo-wide-panorama-of-french-alps.jpg'></img>
      <div>ava+desc</div>
      <MyPosts />
    </div>
  );
}

export default Content;
