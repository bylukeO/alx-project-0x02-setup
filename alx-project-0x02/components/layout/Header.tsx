import React from "react";
import Link from "next/link";

const Header: React.FC = () => (
  <header style={{ width: "100%", padding: "1rem 0", background: "#000000", textAlign: "center" }}>
    <h2 style={{ color: "#fff" }}>ALX Project Header</h2>
    <nav>
      <Link href="/home" style={{ margin: "0 1rem", color: "#fff", textDecoration: "none" }}>Home</Link>
      <Link href="/about" style={{ margin: "0 1rem", color: "#fff", textDecoration: "none" }}>About</Link>
      <Link href="/posts" style={{ margin: "0 1rem", color: "#fff", textDecoration: "none" }}>Posts</Link>
      <Link href="/users" style={{ margin: "0 1rem", color: "#fff", textDecoration: "none" }}>Users</Link>

    </nav>
  </header>
);

export default Header;