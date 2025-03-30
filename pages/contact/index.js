import React from "react";
import styles from "./index.module.css";
import { Button, Paper, TextField } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Mail } from "@mui/icons-material";

const index = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contactDetails}>
        <div className={styles.contactContent}>
          <h1>Contact & Reach Us!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            risus orci, bibendum ac tincidunt ac, eleifend sed turpis. Duis
            dignissim cursus ipsum a condimentum. Donec non risus ullamcorper,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            risus orci, bibendum ac tincidunt ac, eleifend sed turpis. Duis
            dignissim cursus ipsum a condimentum. Donec non risus ullamcorper,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className={styles.contactForm}>
          <Paper elevation={10} className={styles.formPaper}>
            <form className={styles.contactInputs}>
              <TextField label="Name" type="text" className={styles.input} />
              <TextField label="Email" type="email" className={styles.input} />
              <TextField
                label="Phone Number"
                type="number"
                className={styles.input}
              />
              <textarea
                rows={7}
                cols={15}
                className={styles.textArea}
                placeholder="Message"
              ></textarea>
              <Button variant="contained" className={styles.formButton}>
                Submit
              </Button>
            </form>
          </Paper>
        </div>
      </div>
      <div className={styles.contactIcon}>
        <h1>Get In Touch</h1>
        <div className={styles.contactLinks}>
          <div className={styles.linkBox}>
            <LocationOnOutlinedIcon className={styles.icon} />
            <p>Office No. 7, 3rd Floor, AfzalArcade, F-11 Markaz, Islamabad</p>
          </div>
          <div className={styles.linkBox}>
            <WhatsAppIcon className={styles.icon} />
            <p>+92 322 9967991</p>
            <p>+92 317 9967991</p>
          </div>
          <div className={styles.linkBox}>
            {/* <img src="/resources/contact/gmail.png" alt="gmail icon" className={styles.icon} /> */}
            <Mail className={styles.icon} />
            <p className={styles.mail}>Info@rawaanpak.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
