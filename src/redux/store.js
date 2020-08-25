
let store = {
  contentPage : {
    postsData : [
      {id: 1, message: 'aaa', likescount: '22'},
      {id: 2, message: 'bbb', likescount: '12'},
      {id: 3, message: 'ccc', likescount: '23'}
    ]
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

  export let addPost = (postMessage) => {
    let newPost = {
      id: 5,
      message: postMessage,
      likescount: 44
    };
    store.contentPage.postsData.push(newPost);
    //rerenderET();
  }

 

  export default store;