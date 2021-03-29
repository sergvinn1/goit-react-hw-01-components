import React from "react";
import PropTypes from "prop-types";
import styles from "./Stats.module.scss";

const Stats = ({ followers, views, likes }) => {
  return (
    <ul className={styles.stats}>
      <li className={styles.statItem}>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{followers}</span>
      </li>
      <li className={styles.statItem}>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{views}</span>
      </li>
      <li className={styles.statItem}>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{likes}</span>
      </li>
    </ul>
  );
};
Stats.propTypes = {
  followers: PropTypes.string.isRequired,
  views: PropTypes.string.isRequired,
  likes: PropTypes.string.isRequired,
};
export default Stats;
