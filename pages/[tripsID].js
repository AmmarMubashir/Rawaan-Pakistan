import React from "react";
import styles from "./tripsID.module.css";
import Gallery from "@/components/layout/Gallery";
import Image from "next/image";
const activities = [
  {
    key: 1,
    activityImg: "/resources/home/singleTrip/hiking.png",
    activityCaption: "Hiking",
  },
  {
    key: 2,
    activityImg: "/resources/home/singleTrip/hiking.png",
    activityCaption: "Mountain climbing",
  },
  {
    key: 3,
    activityImg: "/resources/home/singleTrip/camping.png",
    activityCaption: "Camping",
  },
  {
    key: 4,
    activityImg: "/resources/home/singleTrip/camping.png",
    activityCaption: "Zip - Lining",
  },
  {
    key: 5,
    activityImg: "/resources/home/singleTrip/hiking.png",
    activityCaption: "Boating",
  },
  {
    key: 6,
    activityImg: "/resources/home/singleTrip/hiking.png",
    activityCaption: "Jet skiing",
  },
  {
    key: 7,
    activityImg: "/resources/home/singleTrip/camping.png",
    activityCaption: "Cultural Music",
  },
  {
    key: 8,
    activityImg: "/resources/home/singleTrip/camping.png",
    activityCaption: "Bonefire",
  },
];

const singleTrips = () => {
  return (
    // <div className={styles.singleTrip}>
    //   <h1>Past trip name</h1>
    //   <div className={styles.tripDetails}>
    //     <div className={styles.tripContent}>
    //       <h2>Description</h2>
    //       <p className={styles.tripcontentStart}>
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
    //         risus orci, bibendum ac tincidunt ac, eleifend sed turpis. Duis
    //         dignissim cursus ipsum a condimentum. Donec non risus ullamcorper,
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
    //         risus orci, bibendum ac tincidunt ac, eleifend sed turpis. Duis
    //         dignissim cursus ipsum{" "}
    //       </p>
    //       <p>
    //         bibendum ac tincidunt ac, eleifend sed turpis. Duis dignissim cursus
    //         ipsum bibendum ac tincidunt ac, eleifend sed turpis. Duis dignissim
    //         cursus ipsum{" "}
    //       </p>
    //     </div>
    //     <div className={styles.tripImg}>
    //       <Image
    //         src="/resources/home/singleTrip/trip.png"
    //         alt="trip detail"
    //         height={300}
    //         width={300}
    //       />
    //     </div>
    //   </div>

    //   <div className={styles.tripActivities}>
    //     <h2>Activities</h2>
    //     <div className={styles.activities}>
    //       {activities.map((act) => (
    //         <ActivitiesBox
    //           key={act.key}
    //           activityImg={act.activityImg}
    //           activityCaption={act.activityCaption}
    //         />
    //       ))}
    //     </div>
    //   </div>
    //   <div className={styles.tripGallery}>
    //     {/* <MasonaryLayout /> */}
    //     <Gallery />
    //   </div>
    // </div>
    <div className={styles.container}>
      <h1 className={styles.title}>Past trip Name</h1>

      <div className={styles.contentSection}>
        <div className={styles.description}>
          <h2 className={styles.sectionTitle}>Description</h2>
          <p className={styles.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing est. Praesent
            risus orci, bibendum ac tincidunt ac, eleifend sed turpis. Duis
            dignissim cursus ipsum a consectetur. Donec non risus ultricorper.
            Lorem ipsum dolor sit amet, consectetur adipiscing est. Praesent
            risus orci, bibendum ac, eleifend sed turpis. Duis dignissim cursus
            ipsum.
          </p>
          <p className={styles.descriptionText}>
            bibendum ac tincidunt ac, eleifend sed turpis. Duis dignissim cursus
            ipsum bibendum ac tincidunt ac, eleifend sed turpis. Duis dignissim
            cursus ipsum.
          </p>
        </div>
        <div className={styles.featuredImageContainer}>
          <Image
            src="/resources/home/singleTrip/trip.png"
            alt="People sitting on rocks during a trip"
            width={400}
            height={300}
            className={styles.featuredImage}
          />
        </div>
      </div>

      <div className={styles.activitiesSection}>
        <h2 className={styles.sectionTitle}>Activities</h2>
        <div className={styles.activitiesGrid}>
          {activities.map((activity, index) => (
            <div key={index} className={styles.activityCard}>
              <div className={styles.activityImageContainer}>
                <Image
                  src={activity.activityImg}
                  alt={activity.activityCaption}
                  width={200}
                  height={150}
                  className={styles.activityImage}
                />
              </div>
              <p className={styles.activityName}>{activity.activityCaption}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.tripGallery}>
        {/* <MasonaryLayout /> */}
        <Gallery />
      </div>
    </div>
  );
};

export default singleTrips;
