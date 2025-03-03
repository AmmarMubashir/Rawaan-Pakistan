import React from 'react';
import styles from './ServiceFourLayout.module.css'
import Image from 'next/image';

import GroupsIcon from '@mui/icons-material/Groups';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const ServiceFourLayout = () => {
  return (
    <div className={styles.rawaanTransport}>
        <h2>Transport vehicles Rawaan provides </h2>
        <div className={styles.transportContainer}>
        <div className={styles.transportBox}>
            <div className={styles.transportImg}>
                <Image src='/resources/services/img1.png' alt='transport vehicle' height={150} width={200} />
            </div>
            <div className={styles.transportDetails}>
            <h2>Car</h2>
             <p> <GroupsIcon /> 5</p>
             <p> <LocalOfferIcon /> Rs 890/hr, 75$/hr</p>
            </div>
        </div>
        <div className={styles.transportBox}>
            <div className={styles.transportImg}>
                <Image src='/resources/services/img1.png' alt='transport vehicle' height={150} width={200} />
            </div>
            <div className={styles.transportDetails}>
            <h2>Car</h2>
             <p> <GroupsIcon /> 5</p>
             <p><LocalOfferIcon /> Rs 890/hr, 75$/hr</p>
            </div>
        </div>
        <div className={styles.transportBox}>
            <div className={styles.transportImg}>
                <Image src='/resources/services/img1.png' alt='transport vehicle' height={150} width={200} />
            </div>
            <div className={styles.transportDetails}>
            <h2>Car</h2>
             <p> <GroupsIcon /> 5</p>
             <p><LocalOfferIcon /> Rs 890/hr, 75$/hr</p>
            </div>
        </div>
        <div className={styles.transportBox}>
            <div className={styles.transportImg}>
                <Image src='/resources/services/img1.png' alt='transport vehicle' height={150} width={200} />
            </div>
            <div className={styles.transportDetails}>
            <h2>Car</h2>
             <p> <GroupsIcon /> 5</p>
             <p><LocalOfferIcon /> Rs 890/hr, 75$/hr</p>
            </div>
        </div>
        <div className={styles.transportBox}>
            <div className={styles.transportImg}>
                <Image src='/resources/services/img1.png' alt='transport vehicle' height={150} width={200} />
            </div>
            <div className={styles.transportDetails}>
            <h2>Car</h2>
             <p> <GroupsIcon /> 5</p>
             <p><LocalOfferIcon /> Rs 890/hr, 75$/hr</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ServiceFourLayout;