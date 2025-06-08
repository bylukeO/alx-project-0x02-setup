import React from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { Address, User } from "../../interfaces";

interface UsersProps {
  users: User[];
}

export default function Users({ users = [] }: UsersProps) {
  return (
    <>
      <Header />
      <main style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "2rem" }}>
        <h1>Users Page</h1>
        <p>This page displays a list of users.</p>
        {users.length === 0 ? (
          <p>No users found.</p>
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

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  return {
    props: {
      users,
    },
  };
}