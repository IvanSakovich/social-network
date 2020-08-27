const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
  _state : {
    contentPage : {
      postsData : [
        {id: 1, message: 'aaa', likescount: '22'},
        {id: 2, message: 'bbb', likescount: '12'},
        {id: 3, message: 'ccc', likescount: '23'}
      ],
      newPostText : ''
    },
    dialogsPage : {
      dialogsData : [
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'Yury'}
      ],
      
    messagesData : [
        {id: 1, message: '1'},
        {id: 2, message: '2'},
        {id: 3, message: '3'}
      ]
    }
    },
    getState() {
      return this._state;
    },
    rerenderET () {
      console.log('state was changed')
    },
    subscribe (observer) {
      this._rerenderET = observer;
    },
    dispatch (action) {
      if (action.type === ADD_POST){
        let newPost = {
          id: 5,
          message: this._state.contentPage.newPostText, // postMessage
          likescount: 44
        };
        this._state.contentPage.postsData.push(newPost);
        this._state.contentPage.newPostText = '';
        this._rerenderET(this._state);
      } else if (action.type === UPDATE_NEW_POST_TEXT){
        this._state.contentPage.newPostText = action.newText;
        this._rerenderET(this._state );
      }
    }
}

export const addPostAC = () => {
  return {
    type : 'ADD_POST'
  }
}

export const updateNewPostTextAC = (text) => {
  return {
    type : 'UPDATE_NEW_POST_TEXT', newText: text
  }
}

  export default store;