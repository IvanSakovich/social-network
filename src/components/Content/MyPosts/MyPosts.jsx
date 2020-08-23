import React from 'react';
import './../../../App.css';
import s from './MyPosts.module.css';
import Post from './Post/Post';

let postsData = [
  {id: 1, message: 'aaa', likescount: '22'},
  {id: 2, message: 'bbb', likescount: '12'},
  {id: 3, message: 'ccc', likescount: '23'}
]
   
let postsElements = postsData
.map( p => <Post id={p.id} message={p.message} likescount={p.likescount}/>)

const MyPosts = () =>{
  return (
    <div className={s.content}>
      <h3>My Posts</h3>
      <div>
        <textarea></textarea>
        </div>
        <div>
        <button>Add Post</button>
      </div>
      <div>New Post</div>
      {postsElements}
    </div>
  );
}

export default MyPosts;
