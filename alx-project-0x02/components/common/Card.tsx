import React from "react";
import { CardProps } from "../../interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => (
  <div style={{
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "1rem",
    margin: "1rem",
    maxWidth: "400px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
  }}>
    <h3>{title}</h3>
    <p>{content}</p>
  </div>
);

export default Card;