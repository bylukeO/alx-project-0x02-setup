import React from "react";
import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

export default function About() {
  return (
    <>
      <Header />
      <main style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "2rem" }}>
        <h1>About Page</h1>
        <p>This page contains information about the ALX Project.</p>
        <div>
          <Button size="small" shape="rounded-sm">Small Rounded</Button>
          <Button size="medium" shape="rounded-md">Medium Rounded</Button>
          <Button size="large" shape="rounded-full">Large Full</Button>
        </div>
      </main>
    </>
  );
}