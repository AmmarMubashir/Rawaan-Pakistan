import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import { Users, MapPin, Building2, Trophy } from "lucide-react";

// Team member data
const teamMembers = [
  {
    id: 1,
    name: "Hassaam Shah",
    title: "Chief Executive Officer (CEO)",
    image: "/resources/about/hasaam.png",
  },
  {
    id: 2,
    name: "Osama Imtiaz",
    title: "Director Supply Chain & Finance",
    image: "/resources/about/osama.png",
  },
  {
    id: 3,
    name: "Waleed A Khan",
    title: "Travel Counsellor",
    image: "/resources/about/waleed.png",
  },
  {
    id: 4,
    name: "Tawaus Khan",
    title: "Head of Transportation",
    image: "/resources/about/tawaus.png",
  },
  {
    id: 5,
    name: "Maryum Ali Syed",
    title: "Creative lead",
    image: "/resources/about/maryum.png",
  },
  {
    id: 6,
    name: "Perkha Raza",
    title: "Social Media Coordinator",
    image: "/resources/about/parkha.png",
  },
  {
    id: 7,
    name: "Prof. Zainub Mawaz",
    title: "",
    image: "/resources/about/zainub.png",
  },
];

const stats = [
  { icon: Users, value: "63", label: "Trips" },
  { icon: MapPin, value: "139", label: "Sites Visited" },
  { icon: Building2, value: "20", label: "Cities" },
  { icon: Trophy, value: "1,752", label: "Satisfied Clients" },
];

const index = () => {
  return (
    <div className={styles.aboutTop}>
      <div className={styles.container}>
        <h1 className={styles.title}>About us</h1>

        <div className={styles.section}>
          <div className={styles.content}>
            <h2 className={styles.sectionTitle}>Our Vision</h2>
            <p className={styles.text}>
              RAWAAN is a full-service travel agency that serves businesses and
              leisure clients who require professional, friendly and efficient
              organization of their inbound travel & tourism needs. It was
              founded as a private company in 2020.
            </p>
            <p className={styles.text}>
              Our company Vision is to become a leading travel and tourism
              related services provider agency nationally.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/resources/about/AboutVision.jpg"
              alt="Team outdoor activity"
              width={500}
              height={300}
              className={styles.image}
            />
          </div>
        </div>

        <div className={styles.statsContainer}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <stat.icon className={styles.statIcon} />
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div className={`${styles.section} ${styles.reversed}`}>
          <div className={styles.imageWrapper}>
            <Image
              src="/resources/about/AboutMission.jpg"
              alt="Mountain landscape"
              width={500}
              height={300}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h2 className={styles.sectionTitle}>Our Mission</h2>
            <p className={styles.text}>
              To meet our clients every travel need through our excellent
              customer service, efficient and cost effective operations. To
              reach the company vision and win this our mission strategy with
              global operation strategies, establishment and acquisition of
              subsidiary companies, partnerships and other ways to further
              extend our global market entry strategies and strengths.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.members}>
        <div className={styles.heading}>
          <h2 className={styles.title}>Our Team</h2>
        </div>

        <div className={styles.teamGrid}>
          {teamMembers.map((member) => (
            <div key={member.id} className={styles.teamCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className={styles.memberImage}
                />
              </div>
              <div className={styles.infoTag}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberTitle}>{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
