import React from "react";
import Link from "next/link";

const Header: React.FC = () => (
  <header style={{ width: "100%", padding: "1rem 0", background: "#000000", textAlign: "center" }}>
    <h2>ALX Project Header</h2>
    <nav>
      <Link href="/home" style={{ margin: "0 1rem" }}>Home</Link>
      <Link href="/about" style={{ margin: "0 1rem" }}>About</Link>
    </nav>
  </header>
);

export default Header;