import React from 'react';
import './../../App.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Content = (props) =>{
  return (
    <div>
      <ProfileInfo />
      <MyPosts postsData={props.store.postsData} addPost = {props.addPost}/>
    </div>
  );
}

export default Content;
