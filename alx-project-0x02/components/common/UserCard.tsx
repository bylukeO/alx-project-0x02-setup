import React from "react";

interface Address {
  street: string;
  city: string;
  zipcode: string;
}

interface UserCardProps {
  name: string;
  email: string;
  address: Address;
}

const UserCard: React.FC<UserCardProps> = ({ name, email, address }) => (
  <div style={{
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "1rem",
    margin: "1rem 0",
    maxWidth: "400px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
  }}>
    <h3>{name}</h3>
    <p>Email: {email}</p>
    <p>
      Address: {address.street}, {address.city}, {address.zipcode}
    </p>
  </div>
);

export default UserCard;