import React from "react";
import styles from './ActivitiesBox.module.css';

const ActivitiesBox = (props) => {
    const {activityImg, activityCaption} = props;
  return (
    <div className={styles.activityImg}>
      <img src={activityImg} alt="activity" />
      <p>{activityCaption}</p>
    </div>
  );
};

export default ActivitiesBox;
