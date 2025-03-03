import { TextField, Button } from "@mui/icons-material";
import React from "react";

import styles from "./ServiceOneLayout.module.css";

const ServiceOneLayout = () => {
  return (
    // <div>
    <form className={styles.serviceOneForm}>
      <div className={styles.serviceOneLeft}>
        <div className={styles.formControl}>
          <label className={styles.label}>Name</label>
          <input
            className={styles.input}
            type="name"
            placeholder="Enter Name"
          />
        </div>
        <div className={styles.formControl}>
          <label className={styles.label}>Destinations</label>
          <div className={styles.destinationChoice}>
            <div className={styles.destinationChoiceInner}>
              <div className={styles.formControlCheck}>
                <input type="checkbox" />
                <label>sakardu</label>
              </div>
              <div className={styles.formControlCheck}>
                <input type="checkbox" />
                <label>chitral</label>
              </div>
              <div className={styles.formControlCheck}>
                <input type="checkbox" />
                <label>sawat</label>
              </div>
            </div>

            <div className={styles.destinationChoiceInner}>
              <div className={styles.formControlCheck}>
                <input type="checkbox" />
                <label>Hunza</label>
              </div>
              <div className={styles.formControlCheck}>
                <input type="checkbox" />
                <label>Neelam valley</label>
              </div>
              <div className={styles.formControlCheck}>
                <input type="checkbox" />
                <label>sawat</label>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.formControl}>
          <label className={styles.label}>Person</label>
          <div className={styles.personChoice}>
            <div className={styles.adultChoice}>
              <div>
                <h2>Adults</h2>
              </div>
              <div className={styles.adultCounter}>
                <div className={styles.adultPlus}>
                  <p>+</p>
                </div>
                {0}
                <div className={styles.adultMinus}>
                  <p>-</p>
                </div>
              </div>
            </div>
            <div className={styles.adultChoice}>
              <div>
                <h2>childs</h2>
              </div>
              <div className={styles.adultCounter}>
                <div className={styles.adultPlus}>
                  <p>+</p>
                </div>
                {0}
                <div className={styles.adultMinus}>
                  <p>-</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.serviceOneRight}>
        <div className={styles.formControl1}>
          <label className={styles.label}>Transit stay</label>
          <div className={styles.stayInner}>
            <div className={styles.radioInner}>
              <label>Naran</label>
              <input type="radio" name="stay" />
            </div>
            <div className={styles.radioInner}>
              <label>Gilgit</label>
              <input type="radio" name="stay" />
            </div>
          </div>
        </div>

        <div className={styles.formControl}>
          <label className={styles.label}>Email</label>
          <input
            className={styles.input}
            type="name"
            placeholder="Enter email"
          />
        </div>
        <div className={styles.formControl}>
          <label className={styles.label}>Departure date</label>
          <input
            className={styles.input}
            type="date"
            placeholder="Enter Name"
          />
        </div>
        <div className={styles.formControl}>
          <label className={styles.label}>Return date</label>
          <input
            className={styles.input}
            type="date"
            placeholder="Enter Name"
          />
        </div>
      </div>
    </form>
    // </div>
  );
};

export default ServiceOneLayout;
