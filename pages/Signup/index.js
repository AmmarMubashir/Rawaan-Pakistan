import React from "react";

import styles from "./index.module.css";
import { Button, Paper } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const index = () => {
  return (
    <div className={styles.signup}>
      <Paper className={styles.paper} elevation={10}>
        <div className={styles.signupImg}>
          <h2>Signup</h2>
          <div className={styles.img}>
            <Image
              src="/resources/signup/signupside.png"
              alt="signup img"
              height={200}
              width={200}
            />
          </div>
        </div>
        <div className={styles.signupForm}>
          <form>
            <div className={styles.formController}>
              <label> Name</label>
              <input type="text" />
            </div>
            <div className={styles.formController}>
              <label> Username</label>
              <input type="text" />
            </div>
            <div className={styles.formController}>
              <label> Email</label>
              <input type="text" />
            </div>
            <div className={styles.formController}>
              <label> Password</label>
              <input type="password" /> <p>use 8 or more character</p>
            </div>
            <Button className={styles.signupBtn}>Sign up</Button>
          </form>
          <p>
            Already have an account <Link href="/Login">Login</Link>{" "}
          </p>
        </div>
      </Paper>
    </div>
  );
};

export default index;
