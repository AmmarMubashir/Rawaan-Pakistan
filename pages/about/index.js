import React from "react";
import styles from "./index.module.css";
const index = () => {
  return (
    <div className={styles.aboutTop}>
      <div className={styles.about}>
        <div className={styles.heading}>
          <div></div>
          <h2>About Us</h2>
        </div>
        <div className={styles.vision}>
          <div className={styles.visionContent}>
            <h3>Our Vision</h3>
            <p>
              RAWAAN is a full-service travel agency that serves businesses and
              leisure clients who require professional, friendly and efficient
              organization of their inbound travel & tourism needs. It was
              founded as a private company in 2020.
            </p>
            <p>
              Our company’s Vision is to become a leading travel and tourism
              related services provider agency nationally
            </p>
          </div>
          <div className={styles.visionImg}>
            <img src="/resources/about/AboutVision.jpg" />
          </div>
        </div>
      </div>
      <div className={styles.aboutIcon}>
        <div className={styles.selfIcon}>
          <img src="/resources/about/trips.svg" />
          <div>
            <h3>63</h3>
            <p>Trips</p>
          </div>
        </div>
        <div className={styles.selfIcon}>
          <img src="/resources/about/visitors.svg" />
          <div>
            <h3>139</h3>
            <p>Sites visited</p>
          </div>
        </div>
        <div className={styles.selfIcon}>
          <img src="/resources/about/cites.svg" />
          <div>
            <h3>20</h3>
            <p>Cites</p>
          </div>
        </div>
        <div className={styles.selfIcon}>
          <img src="/resources/about/clients.svg" />
          <div>
            <h3>1752</h3>
            <p>Satisfied Client</p>
          </div>
        </div>
      </div>

      <div className={styles.mission}>
        <div className={styles.missionImg}>
          <img src="/resources/about/AboutMission.jpg" />
        </div>
        <div className={styles.missionContent}>
          <h3>Our Mission</h3>
          <p>
            To meet our clients every travel need through our excellent customer
            service, efficient and cost effective operations. To reach the
            company’s vision and with this our mission extends with global
            promotion strategies, establishment and acquisition of new
            companies, partnerships and other ways to further extend our global
            market entry strategies and strengths.
          </p>
        </div>
      </div>
      <div className={styles.members}>
        <div className={styles.heading}>
          <div></div>
          <h2>Our Team</h2>
        </div>
        <div className={styles.teams}>
          <div className={styles.teamMember}>
            <div className={styles.memberImg}>
              <img src="/resources/about/hasaam.png" />
            </div>
            <div className={styles.memberContent}>
              <h3>Hassam Shah</h3>
              <p>Chief Executive Officer (CEO)</p>
            </div>
          </div>

          <div className={styles.teamMember}>
            <div className={styles.memberImg}>
              <img src="/resources/about/osama.png" />
            </div>
            <div className={styles.memberContent}>
              <h3>Osama Imtiaz</h3>
              <p>Director Supply Chain & Finance</p>
            </div>
          </div>

          <div className={styles.teamMember}>
            <div className={styles.memberImg}>
              <img src="/resources/about/waleed.png" />
            </div>
            <div className={styles.memberContent}>
              <h3>Waleed A Khan</h3>
              <p>Travel Councelor</p>
            </div>
          </div>

          <div className={styles.teamMember}>
            <div className={styles.memberImg}>
              <img src="/resources/about/tawaus.png" />
            </div>
            <div className={styles.memberContent}>
              <h3>Tawaus Khan</h3>
              <p>Head of Transportation</p>
            </div>
          </div>

          <div className={styles.teamMember}>
            <div className={styles.memberImg}>
              <img src="/resources/about/maryum.png" />
            </div>
            <div className={styles.memberContent}>
              <h3>Maryum Ali Syed</h3>
              <p>Creative Lead</p>
            </div>
          </div>

          <div className={styles.teamMember}>
            <div className={styles.memberImg}>
              <img src="/resources/about/parkha.png" />
            </div>
            <div className={styles.memberContent}>
              <h3>Parkha Raza</h3>
              <p>Social Media Coordinator</p>
            </div>
          </div>

          <div className={styles.teamMember}>
            <div className={styles.memberImg}>
              <img src="/resources/about/zainub.png" />
            </div>
            <div className={styles.memberContent}>
              <h3>Prof. Zainub Nawaz</h3>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
