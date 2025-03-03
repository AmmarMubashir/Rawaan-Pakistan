import React from "react";
import styles from "./TopDestination.module.css";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const TopDestination = (props) => {
  const {
    topDestinationImg,
    topDestinationAlt,
    topDestinationLocation,
    topDestinationCountry,
  } = props;
  return (
    <div className={styles.topDestination1}>
      <Image
        src={topDestinationImg}
        alt={topDestinationAlt}
        height={250}
        width={250}
      />
      <div className={styles.topDestinationInfo}>
        <h2>{topDestinationLocation}</h2>
        <p>
          <span>
            <LocationOnIcon />
          </span>{" "}
          {topDestinationCountry}{" "}
        </p>
      </div>
    </div>
  );
};

export default TopDestination;
