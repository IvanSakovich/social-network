import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog} activeClassName={s.active}>
                <NavLink to='/dialog/1'>Ivan</NavLink></div>
                <div className={s.dialog} activeClassName={s.active}>
                <NavLink to='/dialog/2'>Alex</NavLink></div>
                <div className={s.dialog} activeClassName={s.active}>
                <NavLink to='/dialog/3'>Yury</NavLink></div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>1</div>
                <div className={s.message}>2</div>
                <div className={s.message}>3</div>
            </div>
        </div>
    )
}

export default Dialogs;