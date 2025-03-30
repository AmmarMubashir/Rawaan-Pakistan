import React from "react";
import styles from "./Footer.module.css";
import { IconButton, TextField } from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import Image from "next/image";
import {
  FacebookRounded,
  Instagram,
  LinkedIn,
  LocationOn,
  Mail,
  Phone,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerone}>
        <div className={styles.footerLogo}>
          <Image
            src="/resources/about/FooterlogoRawaan.png"
            alt="footer logo"
            width={90}
            height={80}
          />
        </div>
        <h2>Lets Talk</h2>
        <div className={styles.text}>
          <TextField
            label="Enter Your Email"
            variant="filled"
            className={styles.borderNone}
          />
          <IconButton className={styles.inText}>
            <SendRoundedIcon color="primary" />
          </IconButton>
          {/* <Button variant='contained' className={styles.inText} endIcon={<SendRoundedIcon />} size='large' ></Button> */}
        </div>
        <div className={styles.socialMedia}>
          <p>Follow Us | </p>
          <div className={styles.socialIcon}>
            <FacebookRounded />
            <LinkedIn />
            <Instagram />
          </div>
        </div>
      </div>

      <div className={styles.footertwo}>
        <ul>
          <h2>Links</h2>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Checkout</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </div>

      <div className={styles.footerthree}>
        <ul>
          <h2>Support</h2>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms & conditions</a>
          </li>
        </ul>
      </div>

      <div className={styles.footerfour}>
        <h2>Contact Us</h2>
        <div>
          <Phone />
          <p>+92322 9967991</p>
        </div>
        <div>
          <Mail />
          <p>Info@rawaanpak.com</p>
        </div>
        <div>
          <LocationOn />
          <p className={styles.adress}>
            Office No. 7, 3rd Floor, AfzalArcade, F-11 Markaz, Islamabad
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
