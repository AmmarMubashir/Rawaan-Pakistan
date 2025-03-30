import React from "react";
import styles from "./featuredBlog.module.css";
import { Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const FeaturedBlog = (props) => {
  const { featuredImgPath, featuredImgAlt, date, h2, p, id } = props;
  const exploreLink = `/blog/${id}`;
  return (
    <div className={styles.blogCard}>
      <div className={styles.imageContainer}>
        <Image
          src={featuredImgPath}
          alt={featuredImgAlt}
          width={500}
          height={300}
          className={styles.blogImage}
        />
      </div>
      <div className={styles.blogContent}>
        <div className={styles.blogMeta}>
          <Link href={exploreLink} className={styles.category}>
            See More
          </Link>
          <span className={styles.date}>{date}</span>
        </div>
        <h2 className={styles.blogTitle}>{h2}</h2>
        <p className={styles.blogExcerpt}>{p}</p>
      </div>
    </div>
  );
};

export default FeaturedBlog;
