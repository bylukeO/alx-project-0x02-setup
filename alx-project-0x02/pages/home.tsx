import React, { useState } from "react";
import Header from "../components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState([
    { title: "Getting Started", content: "Learn how to use the ALX Project and explore its features." },
    { title: "About ALX", content: "ALX is a platform for learning and building real-world projects." }
  ]);

  const handleAddPost = (data: { title: string; content: string }) => {
    setPosts([...posts, data]);
  };

  return (
    <>
      <Header />
      <main style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "2rem" }}>
        <h1>Home Page</h1>
        <p>Welcome to the ALX Project Home page.</p>
        <button onClick={() => setIsModalOpen(true)} style={{ marginBottom: "1rem" }}>
          Add New Post
        </button>
        {posts.map((post, idx) => (
          <Card key={idx} title={post.title} content={post.content} />
        ))}
        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />
      </main>
    </>
  );
}