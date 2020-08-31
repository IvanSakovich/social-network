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
    if  (action.type === UPDATE_NEW_MESSAGE_BODY){ 
        state.newMessageBody = action.body; 
      } else if (action.type === SEND_MESSAGE){
        let body = state.newMessageBody;
        state.newMessageBody = '';
        state.messagesData.push({id: 7, message: body});
    }
    return state;
}

export default dialogstReducer;