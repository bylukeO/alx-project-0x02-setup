import React from "react";
import Header from "@/components/layout/Header";

export default function Posts() {
  return (
    <>
      <Header />
      <main style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "2rem" }}>
        <h1>Posts Page</h1>
        <p>This page will display all posts.</p>
      </main>
    </>
  );
}