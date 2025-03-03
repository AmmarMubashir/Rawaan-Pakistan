import React from "react";
import styles from "./ModalHotel.module.css";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Button } from "@mui/material";

const ModalHotel = () => {
  return (
    <div className={styles.modalHotel}>
      <div className={styles.hotelImages}>
        <Image
          src="/resources/services/hotel.jpg"
          height={300}
          width={300}
          alt="hotel Img"
        />
        <Image
          src="/resources/services/hotel.jpg"
          height={300}
          width={300}
          alt="hotel Img"
        />
        <Image
          src="/resources/services/hotel.jpg"
          height={300}
          width={300}
          alt="hotel Img"
        />
        <Image
          src="/resources/services/hotel.jpg"
          height={300}
          width={300}
          alt="hotel Img"
        />
      </div>
      <div className={styles.hotelDetails}>
        <div className={styles.hotelHeading}>
          <h2>Hotel Name</h2>
          <p>
            <LocationOnIcon /> Lorem ipsum dolor sit amet,
          </p>
        </div>
        <ul>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </li>
        </ul>
        <div className={styles.hotelSelection}>
          <div className={styles.hotelPrice}>
            <span>From</span> <p> 2000 pkr</p>
          </div>
          <div className={styles.selectionButton}>
            <Button variant="contained">Select</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalHotel;
