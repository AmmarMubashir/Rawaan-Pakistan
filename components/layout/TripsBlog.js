import React from "react";
import styles from "./TripsBlog.module.css";
import { Button } from "@mui/material";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

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
        <Image src={blogImgPath} alt={blogImgAlt} height={250} width={250} />
      </div>
      <div className={styles.tripVenue}>
        <div className={styles.venue}>
          <p>
            {/* <Image
              src={calendarIcon}
              alt={calendarIconAlt}
              height={15}
              width={15}
            />{" "} */}
            <CalendarMonthIcon />
            {date}
          </p>
          <p>
            {/* <Image
              src={locationIcon}
              alt={locationIconAlt}
              height={15}
              width={15}
            />{" "} */}
            <LocationOnIcon />
            {location}
          </p>
        </div>
        <div className={styles.button}>
          <a href={exploreLink}>
            <Button variant="contained" className={styles.btn}>
              See More
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TripsBlog;
