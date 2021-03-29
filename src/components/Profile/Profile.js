import React from "react";

import Stats from "./Stats";
import styles from "./Profile.module.scss";
// eslint-disable-next-line no-empty-pattern
const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      <div class="description">
        <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <Stats {...stats} />
    </div>
  );
};
export default Profile;
