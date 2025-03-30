import React from "react";
import styles from "./ServiceThreeLayout.module.css";
import Image from "next/image";
import { Button } from "@mui/material";

const ServiceThreeLayout = () => {
  return (
    <div className={styles.serviceThree}>
      <div className={styles.rawaanActivities}>
        <h2>Activetes offered by Rawaan Pakistan</h2>
        <div className={styles.galleryContainer}>
          <div className={styles.galleryItem}>
            <Image
              src="/resources/services/activities/hiking.jpg"
              alt="Image 1"
              height={200}
              width={150}
            />
          </div>
          <div className={styles.galleryItem}>
            <Image
              src="/resources/services/activities/mountainClimbing.jpg"
              alt="Image 2"
              height={200}
              width={150}
            />
          </div>
          <div className={styles.galleryItem}>
            <Image
              src="/resources/services/activities/hiking.jpg"
              alt="Image 3"
              height={200}
              width={150}
            />
          </div>
          <div className={styles.galleryItem}>
            <Image
              src="/resources/services/activities/zipLine.jpg"
              alt="Image 4"
              height={200}
              width={150}
            />
          </div>
          <div className={styles.galleryItem}>
            <Image
              src="/resources/services/activities/boating.jpg"
              alt="Image 5"
              height={200}
              width={150}
            />
          </div>
          <div className={styles.galleryItem}>
            <Image
              src="/resources/services/activities/jetSking.jpg"
              alt="Image 6"
              height={200}
              width={150}
            />
          </div>
          <div className={styles.galleryItem}>
            <Image
              src="/resources/services/activities/boating.jpg"
              alt="Image 7"
              height={200}
              width={150}
            />
          </div>
          <div className={styles.galleryItem}>
            <Image
              src="/resources/services/activities/boneFire.jpg"
              alt="Image 8"
              height={200}
              width={150}
            />
          </div>
        </div>
      </div>
      <div classNameName={styles.activitySelection}>
        <h2>Choose your activities</h2>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem}>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" /> Hiking
            </label>
          </div>
          <div className={styles.gridItem}>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" /> Zip-Lining
            </label>
          </div>
          <div className={styles.gridItem}>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" /> Culturan Music
            </label>
          </div>
          <div className={styles.gridItem}>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" /> Mountain climbing
            </label>
          </div>
          <div className={styles.gridItem}>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" /> Boating
            </label>
          </div>
          <div className={styles.gridItem}>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" /> Bone Fire
            </label>
          </div>
          <div className={styles.gridItem}>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" /> Camping
            </label>
          </div>
          <div className={styles.gridItem}>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" /> Jet skiing
            </label>
          </div>
          <div className={styles.gridItem}>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" /> Hiking
            </label>
          </div>
        </div>
      </div>
      <div className={styles.tourGuide}>
        <h2>Tour Guide</h2>
        <div className={styles.formControl1}>
          <label className={styles.label}>Want a tour guide?</label>
          <div className={styles.stayInner}>
            <div className={styles.radioInner}>
              <label>Yes</label>
              <input type="radio" name="stay" />
            </div>
            <div className={styles.radioInner}>
              <label>No</label>
              <input type="radio" name="stay" />
            </div>
          </div>
        </div>
        <div class={styles.guideContainer}>
          <div class={styles.guideBox}>
            <div className={styles.guideImg}>
              <Image
                src="/resources/services/img1.png"
                alt="Image 1"
                height={200}
                width={150}
              />
            </div>
            <div className={styles.guideDetails}>
              <h3>Guide name</h3>
              <p>Age : 25</p>
              <p>Speak : English</p>
              <Button variant="contained">Select</Button>
            </div>
          </div>
          <div class={styles.guideBox}>
            <div className={styles.guideImg}>
              <Image
                src="/resources/services/img1.png"
                alt="Image 1"
                height={200}
                width={150}
              />
            </div>
            <div className={styles.guideDetails}>
              <h3>Guide name</h3>
              <p>Age : 25</p>
              <p>Speak : English</p>
              <Button variant="contained">Select</Button>
            </div>
          </div>
          <div class={styles.guideBox}>
            <div className={styles.guideImg}>
              <Image
                src="/resources/services/img1.png"
                alt="Image 1"
                height={200}
                width={150}
              />
            </div>
            <div className={styles.guideDetails}>
              <h3>Guide name</h3>
              <p>Age : 25</p>
              <p>Speak : English</p>
              <Button variant="contained">Select</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceThreeLayout;
