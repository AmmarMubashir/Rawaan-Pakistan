import React from 'react';
import styles from './TopDestination.module.css';

const TopDestination = (props) => {
    const {topDestinationImg, topDestinationAlt, topDestinationLocation, topDestinationCountry} = props;
  return (
    <div className={styles.topDestination1}>
              <img src={topDestinationImg} alt={topDestinationAlt} />
              <div className={styles.topDestinationInfo}>
                <h2>{topDestinationLocation}</h2>
                <p>
                  <span>
                    <img src="/resources/home/pinLocation.png" alt="location" />
                  </span>{" "}
                  {topDestinationCountry}{" "}
                </p>
              </div>
            </div>
  )
}

export default TopDestination;