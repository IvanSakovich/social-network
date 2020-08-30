import contentReducer from './contentReducer';
import dialogsReducer from './dialogsReducer';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

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
      ],
      newMessageBody : 'sss'
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
    dispatch (action)  {
      this._state.contentPage = contentReducer(this._state.contentPage, action);
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
      this._rerenderET(this._state );
    }
}

export const addPostAC = () => {
  return {
    type : ADD_POST
  }
}
export const updateNewPostTextAC = (text) => {
  return {
    type : UPDATE_NEW_POST_TEXT, newText: text
  }
}
export const sendMessageAC = () => {
  return {
    type : SEND_MESSAGE
  }
}
export const updateNewMessageBodyAC = (body) => {
  return {
    type : UPDATE_NEW_MESSAGE_BODY, body: body
  }
}

  export default store;