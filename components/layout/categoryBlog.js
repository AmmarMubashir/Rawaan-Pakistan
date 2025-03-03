import React from "react";
import styles from './categoryBlog.module.css';
import { Button } from "@mui/material";

const CategoryBlog = (props) => {
    const {categoryImgPath, categoryImgAlt, date, h2, p} = props;
  return (
    <div className={styles.categoryBlog}>
      <div className={styles.categoryImg}>
        <img src={categoryImgPath} alt={categoryImgAlt} />
      </div>

      <div className={styles.button}>
        <Button variant="contained">See More</Button>
        <p>{date}</p>
      </div>
      <div className={styles.categoryBlogContent}>
        <h2>{h2}</h2>
        <p>
         {p}
        </p>
      </div>
    </div>
  );
};

export default CategoryBlog;
