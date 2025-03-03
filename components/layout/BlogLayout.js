import React from "react";
import styles from "./BlogLayout.module.css";

const BlogLayout = () => {
  return (
    <div className={styles.blogDetails}>
      <div className={styles.singleBlog}>
        <div className={styles.blogTitle}>
          <h1>Blog title heading will go here</h1>
          <p>Published on 11 jan 2002</p>
        </div>
        <div className={styles.blogImg}>
          <img src="/resources/blog/singleBlog.png" />
        </div>
        <div className={styles.blogContent}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            rutrum dui ac enim placerat sagittis. Sed a mauris nec nisl
            malesuada molestie. Fusce a nisl eu sem sagittis ornare at congue
            nisi. Mauris laoreet augue vel molestie condimentum. Aliquam
            volutpat a nulla at eleifend. Aenean vitae vestibulum libero.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            rutrum dui ac enim placerat sagittis. Sed a mauris nec nisl
            malesuada molestie. Fusce a nisl eu sem sagittis ornare at congue
            nisi. Mauris laoreet augue vel molestie condimentum. Aliquam
            volutpat a nulla at eleifend. Aenean vitae vestibulum libero.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            rutrum dui ac enim placerat sagittis. Sed a mauris nec nisl
            malesuada molestie. Fusce a nisl eu sem sagittis ornare at congue
            nisi. Mauris laoreet augue vel molestie condimentum. Aliquam
            volutpat a nulla at eleifend. Aenean vitae vestibulum libero.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;
