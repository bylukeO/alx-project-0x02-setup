import React from "react";
import Header from "../components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "2rem" }}>
        <h1>Welcome to the ALX Project!</h1>
        <p>This is the Next.js starter page.</p>
      </main>
    </>
  );
}