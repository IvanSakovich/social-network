let rerenderET = () => {
  console.log('state was changed')
}

let store = {
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
  }

  export const addPost = (postMessage) => {
    let newPost = {
      id: 5,
      message: postMessage,
      likescount: 44
    };
    store.contentPage.postsData.push(newPost);
    store.contentPage.newPostText = '';
    rerenderET(store);
  }

  export const updateNewPostText = (newText) => {
    store.contentPage.newPostText = newText;
    rerenderET(store);
  }

  export const subscribe = (observer) => {
    rerenderET = observer;
  }

  export default store;