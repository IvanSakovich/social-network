import React from 'react';
import './../../../App.css';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostAC, updateNewPostTextAC}from './../../../redux/store';

const MyPosts = (props) =>{
  
  let postsElements = props.postsData
.map( p => <Post id={p.id} message={p.message} likescount={p.likescount}/>)

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostAC());
    //props.addPost();
  //  let text = newPostElement.current.value;
  // newPostElement.current.value = '';
  }

  let onPostChange = () => {
      let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextAC(text));
  //  props.updateNewPostText(text);
  //  newPostElement.current.value = '';
  }

  return (
    <div className={s.content}>
      <h3>My Posts</h3>
      <div>
        <textarea ref={newPostElement}onChange={onPostChange} 
        value={props.newPostText}></textarea>
        </div>
        <div>
        <button onClick={addPost}>Add Post</button>
      </div>
      <div>New Post</div>
      {postsElements}
    </div>
  );
}

export default MyPosts;
