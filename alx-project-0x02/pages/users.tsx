import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { Address, User } from "../../interfaces";

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <main style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "2rem" }}>
        <h1>Users Page</h1>
        <p>This page displays a list of users.</p>
        {loading ? (
          <p>Loading...</p>
        ) : (
          users.map((user) => (
            <UserCard
              key={user.id}
              name={user.name}
              email={user.email}
              address={user.address}
            />
          ))
        )}
      </main>
    </>
  );
}