import React from 'react';
import './../../App.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Content = (props) =>{
  return (
    <div>
      <ProfileInfo />
      <MyPosts
       newPostText={props.contentReducer.newPostText} 
       postsData={props.contentReducer.postsData}
      // newPostText={props.contentReducer} 
        dispatch={props.dispatch}
       //store={props.store}
      />
    </div>
  );
}

export default Content;
