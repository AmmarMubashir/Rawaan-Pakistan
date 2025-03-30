import React from "react";
import styles from "./BlogLayout.module.css";
import Link from "next/link";
import Image from "next/image";

const BlogLayout = () => {
  return (
    <main className={styles.container}>
      <div className={styles.breadcrumbs}>
        <Link href="/blog">Blog</Link> &gt;{" "}
        <Link href="/blog/category">Category</Link>
      </div>

      <article className={styles.blogPost}>
        <h1 className={styles.title}>Blog title heading will go here</h1>
        <p className={styles.publishDate}>Published on 11 Jan 2022</p>

        <div className={styles.shareContainer}>
          <button className={styles.shareButton}>Share this post</button>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="/resources/blog/singleBlog.png"
            alt="Mountain valley with river"
            width={800}
            height={400}
            className={styles.featuredImage}
          />
        </div>

        <div className={styles.content}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            rutrum dui ac enim placerat sagittis. Sed a mauris nec nisi
            malesuada molestie. Fusce a nisi eu sem sagittis ornare at congue
            nisi. Mauris laoreet augue vel molestie condimentum. Aliquam
            volutpat a nulla at eleifend. Aenean vitae vestibulum libero.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            rutrum dui ac enim placerat sagittis. Sed a mauris nec nisi
            malesuada molestie. Fusce a nisi eu sem sagittis ornare at congue
            nisi. Mauris laoreet augue vel molestie condimentum. Aliquam
            volutpat a nulla at eleifend. Aenean vitae vestibulum libero.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            rutrum dui ac enim placerat sagittis. Sed a mauris nec nisi
            malesuada molestie. Fusce a nisi eu sem sagittis ornare at congue
            nisi. Mauris laoreet augue vel molestie condimentum. Aliquam
            volutpat a nulla at eleifend. Aenean vitae vestibulum libero.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            rutrum dui ac enim placerat sagittis. Sed a mauris nec nisi
            malesuada molestie. Fusce a nisi eu sem sagittis ornare at congue
            nisi. Mauris laoreet augue vel molestie condimentum. Aliquam
            volutpat a nulla at eleifend. Aenean vitae vestibulum libero.
          </p>
        </div>
      </article>
    </main>
  );
};

export default BlogLayout;
