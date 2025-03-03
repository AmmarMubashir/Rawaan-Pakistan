import React from "react";
import styles from "./tripsID.module.css";
import ActivitiesBox from "@/components/layout/ActivitiesBox";
import MasonaryLayout from "@/components/layout/MasonaryLayout";
import Gallery from "@/components/layout/Gallery";
const activities = [
  {
    key: 1,
    activityImg: "/resources/home/singleTrip/img1.png",
    activityCaption: "Hiking",
  },
  {
    key: 2,
    activityImg: "/resources/home/singleTrip/img2.png",
    activityCaption: "Mountain climbing",
  },
  {
    key: 3,
    activityImg: "/resources/home/singleTrip/img3.png",
    activityCaption: "Camping",
  },
  {
    key: 4,
    activityImg: "/resources/home/singleTrip/img4.png",
    activityCaption: "Zip - Lining",
  },
  {
    key: 5,
    activityImg: "/resources/home/singleTrip/img5.png",
    activityCaption: "Boating",
  },
  {
    key: 6,
    activityImg: "/resources/home/singleTrip/img6.png",
    activityCaption: "Jet skiing",
  },
  {
    key: 7,
    activityImg: "/resources/home/singleTrip/img7.png",
    activityCaption: "Cultural Music",
  },
  {
    key: 8,
    activityImg: "/resources/home/singleTrip/img8.png",
    activityCaption: "Bonefire",
  },
];

const singleTrips = () => {
  return (
    <div className={styles.singleTrip}>
      <h1>Past trip name</h1>
      <div className={styles.tripDetails}>
        <div className={styles.tripContent}>
          <h2>Description</h2>
          <p className={styles.tripcontentStart}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            risus orci, bibendum ac tincidunt ac, eleifend sed turpis. Duis
            dignissim cursus ipsum a condimentum. Donec non risus ullamcorper,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            risus orci, bibendum ac tincidunt ac, eleifend sed turpis. Duis
            dignissim cursus ipsum{" "}
          </p>
          <p>
            bibendum ac tincidunt ac, eleifend sed turpis. Duis dignissim cursus
            ipsum bibendum ac tincidunt ac, eleifend sed turpis. Duis dignissim
            cursus ipsum{" "}
          </p>
        </div>
        <div className={styles.tripImg}>
          <img src="/resources/home/singleTrip/trip.png" />
        </div>
      </div>

      <div className={styles.tripActivities}>
        <h2>Activities</h2>
        <div className={styles.activities}>
          {activities.map((act) => (
            <ActivitiesBox
              key={act.key}
              activityImg={act.activityImg}
              activityCaption={act.activityCaption}
            />
          ))}
        </div>
      </div>
      <div className={styles.tripGallery}>
              {/* <MasonaryLayout /> */}
              <Gallery/>
      </div>
    </div>
  );
};

export default singleTrips;
