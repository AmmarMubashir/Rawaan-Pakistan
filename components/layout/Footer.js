import React from 'react';
import styles from './Footer.module.css'
import { Button, Icon, IconButton, TextField } from '@mui/material';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footerone}>
            <div className={styles.footerLogo}>
                <img src='/resources/about/FooterlogoRawaan.png' />
            </div>
            <h2>Lets Talk</h2>
            <div className={styles.text}>
            <TextField label="Enter Your Email" variant='filled' className={styles.borderNone}/>
            <IconButton className={styles.inText}>
                <SendRoundedIcon color='primary' />
            </IconButton>
            {/* <Button variant='contained' className={styles.inText} endIcon={<SendRoundedIcon />} size='large' ></Button> */}
            </div>
            <div className={styles.socialMedia}>
                <p>Follow Us | </p>
                <div className={styles.socialIcon}>
                    <img src='/resources/about/facebook.svg' />
                    <img src='/resources/about/linkedin.svg' />
                    <img src='/resources/about/instagram.svg' />
                </div>
            </div>
        </div>
        
        <div className={styles.footertwo}>
            <ul>
                <h2>Links</h2>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Blog</a></li>
                <li><a href='#'>Services</a></li>
                <li><a href='#'>Checkout</a></li>
                <li><a href='#'>Login</a></li>
            </ul>
        </div>

        <div className={styles.footerthree}>
        <ul>
                <h2>Support</h2>
                <li><a href='#'>Privacy Policy</a></li>
                <li><a href='#'>Terms & conditions</a></li>
            </ul>
        </div>

        <div className={styles.footerfour}>
            <h2>Contact Us</h2>
            <div>
                <img src='/resources/about/phone.svg' />
                <p>+92322 9967991</p>
            </div>
            <div>
                <img src='/resources/about/mail.svg' />
                <p>Info@rawaanpak.com</p>
            </div>
            <div>
                <img src='/resources/about/location.svg' />
                <p className={styles.adress}>Office No. 7, 3rd Floor, AfzalArcade, F-11 Markaz, Islamabad</p>
            </div>
        </div>
    </div>
  )
}

export default Footer;