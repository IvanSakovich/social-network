import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DI from './DI/DI';

let dialogsData = [
    {id: 1, name: 'Ivan'},
    {id: 2, name: 'Alex'},
    {id: 3, name: 'Yury'}
]

let dialogsElements = dialogsData
.map( d => <DI name={d.name} id={d.id}/> );

let messagesData = [
    {id: 1, message: '1'},
    {id: 2, message: '2'},
    {id: 3, message: '3'}
]

let messagesElements = messagesData.
map( m => <Message id={m.id} message={m.message}/>)

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;