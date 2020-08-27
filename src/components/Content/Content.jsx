import React from 'react';
import './../../App.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Content = (props) =>{
  console.log(props)
  return (
    <div>
      <ProfileInfo />
      <MyPosts newPostText={props.store.newPostText} 
      postsData={props.store.postsData} addPost = {props.addPost}
      updateNewPostText={props.updateNewPostText}/>
    </div>
  );
}

export default Content;
