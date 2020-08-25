import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DI from './DI/DI';

const Dialogs = (props) => {
    
let dialogsElements = props.store.dialogsData
.map( d => <DI name={d.name} id={d.id}/> );

let messagesElements = props.store.messagesData
.map( m => <Message id={m.id} message={m.message}/>)

let newDialogMessage = React.createRef();

let addMessage = () => {
    let textDialogs = newDialogMessage.current.value;
    alert(textDialogs);
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
                <textarea ref={newDialogMessage}></textarea>
                <button onClick={addMessage}>add message</button>
            </div>
        </div>
    )
}

export default Dialogs;