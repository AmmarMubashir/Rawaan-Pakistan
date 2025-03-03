import React, { Fragment, useState } from "react";
import styles from "./MainHeader.module.css";
// import '../../styles/checking.css';
import { Button, Drawer, IconButton, Box, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import Image from "next/image";

const MainHeader = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [login, setLogin] = useState(false);
  return (
    <Fragment>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Image src="/resources/about/navbarlogoRawaan.png" height={300} width={300} alt="logo" className={styles.headerLogo} />
          {/* <img src="/resources/about/navbarlogoRawaan.png" /> */}
        </div>
        {/* {login && ( */}
          <div className={styles.navList}>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="services">Services</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/gallery">Gallery</Link>
              </li>
              {/* <li>
                <Link href="#">Checkout</Link>
              </li> */}
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        {/* )} */}

        <div className={styles.navButton}>
          <Link href="/Login">
            <Button variant="contained">Log in</Button>
          </Link>
          <Link href="/Signup">
            <Button variant="contained">Sign up</Button>
          </Link>
        </div>
        <IconButton
          size="large"
          className={styles.menuIcon}
          onClick={() => setDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>
      </div>

      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        anchor="left"
      >
        <Box
          p={2}
          width="350px"
          role="presentation"
          sx={{
            textAlign: "center",
          }}
        >
          <CloseIcon
            sx={{ position: "absolute", right: "20px" }}
            onClick={() => setDrawerOpen(false)}
          />

          <Stack>
            <div className={styles.navList2}>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/gallery">Gallery</Link>
                </li>
                {/* <li>
                  <Link href="#">Checkout</Link>
                </li> */}
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </Stack>
        </Box>
      </Drawer>
    </Fragment>
  );
};

export default MainHeader;
