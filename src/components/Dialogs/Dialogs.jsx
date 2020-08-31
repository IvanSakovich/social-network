import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DI from './DI/DI';
import {updateNewMessageBodyAC, sendMessageAC} from './../../redux/store';

const Dialogs = (props) => {

let state = props.store.getState().dialogsReducer;

let dialogsElements = state.dialogsData
.map( d => <DI name={d.name} id={d.id}/> );

let messagesElements = state.messagesData
.map( m => <Message id={m.id} message={m.message}/>)

let newMessageBody = state.newMessageBody

let newDialogMessage = React.createRef();

let onSendMessageClick = () => {
    props.store.dispatch(sendMessageAC());
}

let onNewMessageChange = (e) => {
    console.log(props)
    let text = e.target.value
    props.store.dispatch(updateNewMessageBodyAC(text));
}

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea ref={newDialogMessage}
                onChange={onNewMessageChange}
                placeholder='Enter your message'
                value={newMessageBody}></textarea>
                <button onClick={onSendMessageClick}>send message</button>
            </div>
        </div>
    )
}

export default Dialogs;