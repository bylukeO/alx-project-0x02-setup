import React from "react";
import Header from "../components/layout/Header";

export default function About() {
  return (
    <>
      <Header />
      <main style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "2rem" }}>
        <h1>Home Page</h1>
        <p>Welcome to the ALX Project Home Page.</p>
      </main>
    </>
  );
}