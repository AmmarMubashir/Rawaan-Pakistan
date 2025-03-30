import BlogLayout from "@/components/layout/BlogLayout";
import { useRouter } from "next/router";
import React from "react";

const BlogDetails = () => {
  const router = useRouter();
  const blogId = router.query.blogId;
  console.log(blogId);
  return (
    <div>
      <BlogLayout />
    </div>
  );
};

export default BlogDetails;
