import React from 'react';
import './../../../App.css';
import MyPosts from './MyPosts';
import {addPostAC, updateNewPostTextAC}from '../../../redux/store';

const MyPostsContainer = (props) =>{

  let addPost = () => {
    props.dispatch(addPostAC());
    //props.addPost();
  //  let text = newPostElement.current.value;
  // newPostElement.current.value = '';
  }

  let onPostChange = (text) => {
    //let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextAC(text));
  //  props.updateNewPostText(text);
  //  newPostElement.current.value = '';
  }

  return (
    <MyPosts updateNewPostText={onPostChange} addPost={addPost} postsData={props.postsData}/>
  );
}

export default MyPostsContainer;
