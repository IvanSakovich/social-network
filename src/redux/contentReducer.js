const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  postsData : [
    {id: 1, message: 'aaa', likescount: '22'},
    {id: 2, message: 'bbb', likescount: '12'},
    {id: 3, message: 'ccc', likescount: '23'}
  ],
  newPostText : ''
}

const contentReducer = (state = initialState, action) => {
    if (action.type === ADD_POST){
        let newPost = {
          id: 5,
          message: state.newPostText, // postMessage
          likescount: 44
        };
        state.postsData.push(newPost);
        state.newPostText = '';
      } else if (action.type === UPDATE_NEW_POST_TEXT){
        state.newPostText = action.newText;
      } 
    return state;
}

export default contentReducer;