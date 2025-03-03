import React from "react";
import styles from "./TripsBlog.module.css";
import { Button } from "@mui/material";

const TripsBlog = (props) => {
  const {
    blogImgPath,
    blogImgAlt,
    calendarIcon,
    calendarIconAlt,
    locationIcon,
    locationIconAlt,
    date,
    location,
    id,
  } = props;
  const exploreLink = `/${id}`;
  return (
    <div className={styles.tripsBlog}>
      <div className={styles.tripImg}>
        <img src={blogImgPath} alt={blogImgAlt} />
      </div>
      <div className={styles.tripVenue}>
        <div className={styles.venue}>
          <p>
            <img src={calendarIcon} alt={calendarIconAlt} /> {date}
          </p>
          <p>
            <img src={locationIcon} alt={locationIconAlt} /> {location}
          </p>
        </div>
        <div className={styles.button}>
          <a href={exploreLink}>
            <Button variant="contained">See More</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TripsBlog;
