import React from 'react';
import './../../../App.css';
import s from './ProfileInfo.module.css';

const ProfileInfo = () =>{
  return (
    <div>
      <img alt='logoPI' src='https://static3.depositphotos.com/1000454/256/i/450/depositphotos_2567474-stock-photo-wide-panorama-of-french-alps.jpg'></img>
      <div className={s.description}>ava+desc</div>
    </div>
  );
}

export default ProfileInfo;
