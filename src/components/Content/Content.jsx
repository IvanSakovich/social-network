import React from 'react';
import './../../App.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Content = (props) =>{
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer
      newPostText={props.contentReducer.newPostText} 
      postsData={props.contentReducer.postsData}
      dispatch={props.dispatch}
      // store={props.store}
      />
    </div>
  );
}

export default Content;
