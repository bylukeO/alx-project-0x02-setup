import React from "react";
import { PostCardProps } from "../../interfaces";


const PostCard: React.FC<PostCardProps> = ({ title, content, userId }) => (
  <div style={{
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "1rem",
    margin: "1rem 0",
    maxWidth: "400px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
  }}>
    <h3>{title}</h3>
    <p>{content}</p>
    <small>User ID: {userId}</small>
  </div>
);

export default PostCard;