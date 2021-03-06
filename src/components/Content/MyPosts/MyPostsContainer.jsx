//import React from 'react';
import './../../../App.css';
import MyPosts from './MyPosts';
import {addPostAC, updateNewPostTextAC} from '../../../redux/store';
import {connect} from 'react-redux'; 

let mapStateToProps = (state) =>{
  return {
    postsData: state.contentReducer.postsData,
    newPostText: state.contentReducer.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {dispatch(addPostAC())},
    updateNewPostText: (text) => {
    dispatch(updateNewPostTextAC(text))
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
