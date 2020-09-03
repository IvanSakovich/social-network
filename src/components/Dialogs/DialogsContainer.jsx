//import React from 'react';
import {updateNewMessageBodyAC, sendMessageAC} from '../../redux/store';
import Dialogs from './Dialogs';
import {connect} from 'react-redux'; 


let mapStateToProps = (state) => {
    return {
        dialogsReducer: state.dialogsReducer
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: () => {dispatch(updateNewMessageBodyAC())},
        sendMessage: (text) => {dispatch(sendMessageAC(text))}
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;