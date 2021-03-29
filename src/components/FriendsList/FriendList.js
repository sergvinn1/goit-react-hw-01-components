import React from "react";
import FriendsListItem from "./FriendsListItem";
import style from "./FriendList.module.scss";

const FriendsList = ({ friends }) => {
  if (friends.length === 0) return null;
  return <ul class={style.friendList}>{friends.map(FriendsListItem)}</ul>;
};
export default FriendsList;
