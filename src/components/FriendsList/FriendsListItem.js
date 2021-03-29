import React from "react";
import style from './FriendsListItem.module.scss' 

const FriendsListItem = ({ id, name, avatar, isOnline }) => { 
  const statusClassName = isOnline ? style.online : style.offline
  return (
    <li key={id} className={style.item}>
      <span className={statusClassName}></span>
      <img className={style.avatar} src={avatar} alt={name} width="48" />
      <p className={style.name}>{name}</p>
    </li>
  );
}
export default FriendsListItem