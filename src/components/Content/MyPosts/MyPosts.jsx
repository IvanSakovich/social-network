import React from 'react';
import './../../../App.css';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) =>{
  
  let postsElements = props.postsData
.map( p => <Post id={p.id} message={p.message} likescount={p.likescount}/>)

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  }
  return (
    <div className={s.content}>
      <h3>My Posts</h3>
      <div>
        <textarea ref={newPostElement}></textarea>
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
