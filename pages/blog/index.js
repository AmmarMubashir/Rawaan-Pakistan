import styles from "./index.module.css";
import FeaturedBlog from "@/components/layout/featuredBlog";

const featuredBlog = [
  {
    key: "1",
    id: "b1",
    featuredImgPath: "/resources/blog/featuredImg1.png",
    featuredImgAlt: "featured img",
    date: "21 March 2023",
    h2: "Blog title heading will go here",
    p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
  {
    key: "2",
    id: "b2",
    featuredImgPath: "/resources/blog/featuredImg2.png",
    featuredImgAlt: "featured img",
    date: "21 March 2023",
    h2: "Blog title heading will go here",
    p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
  {
    key: "3",
    id: "b3",
    featuredImgPath: "/resources/blog/featuredImg3.png",
    featuredImgAlt: "featured img",
    date: "21 March 2023",
    h2: "Blog title heading will go here",
    p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
  {
    key: "4",
    id: "b4",
    featuredImgPath: "/resources/blog/featuredImg4.png",
    featuredImgAlt: "featured img",
    date: "21 March 2023",
    h2: "Blog title heading will go here",
    p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
  {
    key: "5",
    id: "b5",
    featuredImgPath: "/resources/blog/featuredImg5.png",
    featuredImgAlt: "featured img",
    date: "21 March 2023",
    h2: "Blog title heading will go here",
    p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
  {
    key: "6",
    id: "b6",
    featuredImgPath: "/resources/blog/featuredImg6.png",
    featuredImgAlt: "featured img",
    date: "21 March 2023",
    h2: "Blog title heading will go here",
    p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
];
const index = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.sectionTitle}>Featured blogs</h1>
        <div className={styles.blogGrid}>
          {featuredBlog.map((blog) => (
            <FeaturedBlog
              key={blog.key}
              id={blog.id}
              featuredImgPath={blog.featuredImgPath}
              featuredImgAlt={blog.featuredImgAlt}
              date={blog.date}
              h2={blog.h2}
              p={blog.p}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default index;
