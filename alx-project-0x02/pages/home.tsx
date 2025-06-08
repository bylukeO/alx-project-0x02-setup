import React from "react";
import Header from "../components/layout/Header";
import Card from "../components/common/Card";

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "2rem" }}>
        <h1>Home Page</h1>
        <p>Welcome to the ALX Project Home page.</p>
        <Card
          title="Getting Started"
          content="Learn how to use the ALX Project and explore its features."
        />
        <Card
          title="About ALX"
          content="ALX is a platform for learning and building real-world projects."
        />
      </main>
    </>
  );
}