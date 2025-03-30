import React from "react";

import styles from "./index.module.css";
import { Button, Paper } from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import Link from "next/link";
import Image from "next/image";

const index = () => {
  return (
    <div className={styles.login}>
      <Paper
        sx={{
          height: "500px",
          width: "380px",
          background: "#DAE0E6",
        }}
        elevation={10}
        className={styles.paper}
      >
        <Image
          src="/resources/login/loginlogo.png"
          alt="login logo"
          height={90}
          width={90}
        />

        <div className={styles.formController}>
          <label>
            <PersonIcon className={styles.icon}></PersonIcon> Username
          </label>
          <input type="text" />
        </div>
        <div className={styles.formController}>
          <label>
            <LockIcon className={styles.icon}></LockIcon> Password
          </label>
          <input type="password" />
        </div>

        <Link href="#" className={styles.forgotPss}>
          Forgot your password?
        </Link>

        <Button className={styles.loginBtn}>Log in</Button>

        <p>
          Don&apos;t have an account? <Link href="/Signup">Signup</Link>
        </p>
      </Paper>
    </div>
  );
};

export default index;
