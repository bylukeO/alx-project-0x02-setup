import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { ApiPost } from "../../interfaces";

export default function Posts() {
  const [posts, setPosts] = useState<ApiPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <main style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "2rem" }}>
        <h1>Posts Page</h1>
        <p>This page will display all posts.</p>
        {loading ? (
          <p>Loading...</p>
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