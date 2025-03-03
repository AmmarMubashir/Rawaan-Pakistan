import React from "react";
import styles from "./featuredBlog.module.css";
import { Button } from "@mui/material";
import Link from "next/link";

const FeaturedBlog = (props) => {
  const { featuredImgPath, featuredImgAlt, date, h2, p, id } = props;
  const exploreLink = `/blog/${id}`;
  return (
    <div className={styles.featuredBlog}>
      <div className={styles.featuredImg}>
        <img src={featuredImgPath} alt={featuredImgAlt} />
      </div>

      <div className={styles.button}>
        <Link href={exploreLink}>
          <Button variant="contained">See More</Button>
        </Link>
        <p>{date}</p>
      </div>
      <div className={styles.featuredBlogContent}>
        <h2>{h2}</h2>
        <p>{p}</p>
      </div>
    </div>
  );
};

export default FeaturedBlog;
