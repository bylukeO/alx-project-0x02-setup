import React from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { ApiPost } from "../../interfaces";

interface PostsProps {
  posts: ApiPost[];
}

export default function Posts({ posts = [] }: PostsProps) {
  return (
    <>
      <Header />
      <main style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "2rem" }}>
        <h1>Posts Page</h1>
        <p>This page will display all posts.</p>
        {posts.length === 0 ? (
          <p>No posts found.</p>
        ) : (
          posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              content={post.body}
              userId={post.userId}
            />
          ))
        )}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  const posts: ApiPost[] = await res.json();

  return {
    props: {
      posts,
    },
  };
}