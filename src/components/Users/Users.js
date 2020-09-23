import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from './../../images/images.png';

const Users = (props) => {
    
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=> {
            props.setUsers(response.data.items)
        });
    }

    return (
        <div className={s.users}>
            {props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img alt='ava' className={s.userPhoto} src={u.photos.small !=null ? u.photos.small : userPhoto}></img>
                    </div>
                    <div>
                        {u.followed 
                        ? <button onClick={() => { props.follow(u.id)}}>Unfollow</button> 
                        : <button onClick={() => { props.unfollow(u.id)}}>Follow</button>}
                    </div>
                </span>
<span>
                    <span><div>{u.name}</div>
                    <div>{u.status}</div>
                    </span>
                    <span>
                    <div>{"u.location"}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}

export default Users;