import React from "react";
import styles from './tripLocationBox.module.css';
import { Button } from "@mui/material";

const TripsLocation = (props) => {
    const {tripLocationImg, tripLocationAlt, tripLocation, tripCategory, tripPrice, daysLeft} = props;
  return (
    <div className={styles.sellertripsBlog}>
              <div className={styles.sellertripImg}>
                <img src={tripLocationImg} alt={tripLocationAlt} />
              </div>
              <div className={styles.sellertripVenue}>
                <h2>{tripLocation}</h2>
                <div>{tripCategory}</div>
              </div>
              <div className={styles.tripPrice}>
                <span>From</span>
                <h2>{tripPrice} Pkr</h2>
              </div>
              <div className={styles.tripTimer}>
                  <h4><img src="/resources/home/timer.png" /> {daysLeft} days</h4>
                  <Button variant="contained">Book Now</Button>
              </div>
            </div>
  );
};

export default TripsLocation;
