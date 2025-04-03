"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import styles from "./MainHeader.module.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Clean up the body overflow when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <div className={styles.logoWrapper}>
              <Image
                src="/resources/about/navbarlogoRawaan.png"
                alt="Rawan Logo"
                width={120}
                height={120}
                className={styles.logoImage}
              />
              {/* <span className={styles.logoText}>RAWAN</span> */}
            </div>
          </Link>
        </div>

        {/* Mobile menu button with animation */}
        <button
          className={`${styles.mobileMenuButton} ${
            isMenuOpen ? styles.active : ""
          }`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation links */}
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink}>
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/services" className={styles.navLink}>
                Services
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/about" className={styles.navLink}>
                About
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/gallery" className={styles.navLink}>
                Gallery
              </Link>
            </li>

            <li className={styles.navItem}>
              <Link href="/blog" className={styles.navLink}>
                Blog
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/contact" className={styles.navLink}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Auth buttons */}
        <div
          className={`${styles.authButtons} ${
            isMenuOpen ? styles.authButtonsOpen : ""
          }`}
        >
          <Link href="/Login" className={styles.loginButton}>
            Log in
          </Link>
          <Link href="Signup" className={styles.signupButton}>
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}
