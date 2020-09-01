import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DI from './DI/DI';
import {updateNewMessageBodyAC, sendMessageAC} from '../../redux/store';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

let state = props.store.getState().dialogsReducer;

//let dialogsElements = state.dialogsData.map( d => <DI name={d.name} id={d.id}/> );
//let messagesElements = state.messagesData.map( m => <Message id={m.id} message={m.message}/>)
//let newMessageBody = state.newMessageBody

let newDialogMessage = React.createRef();

let onSendMessageClick = () => {
    props.store.dispatch(sendMessageAC());
}

let onNewMessageChange = (text) => {   
    //let text = e.target.value
    props.store.dispatch(updateNewMessageBodyAC(text));
}

    return (
        <Dialogs updateNewMessageBody={onNewMessageChange} 
        sendMessage={onSendMessageClick}
        dialogsReducer={state}/>
    )
}

export default DialogsContainer;