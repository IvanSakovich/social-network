import React from 'react';
import './../../../App.css';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () =>{
  return (
    <div className={s.content}>
      <div>My Posts</div>
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <div>New Post</div>
      <Post message='aaa' likescount='22'/>
      <Post message='bbb' likescount='12'/>
      <Post message='ccc' likescount='24'/>
    </div>
  );
}

export default MyPosts;
