const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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

const dialogstReducer  = (state = initialState, action) => {
  let stateCopy;
    if  (action.type === UPDATE_NEW_MESSAGE_BODY){ 
      stateCopy = {...state,
        newMessageBody: action.body};
        return stateCopy;
      } else if (action.type === SEND_MESSAGE){
        let body = state.newMessageBody;
        stateCopy = {
          ...state,
          newMessageBody: '',
          messagesData : [...state.messagesData, {id: 7, message: body}]
         };
         return stateCopy;
    }
    return state;
}

export default dialogstReducer;