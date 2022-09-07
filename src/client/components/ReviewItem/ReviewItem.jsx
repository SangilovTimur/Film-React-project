import React from "react";

export default function ReviewItem({ author, content, updated_at }) {
  return (
    <li className="reviewitem">
      <h2 className="reviewtitle">{author}</h2>
      <p className="review">{content}</p>
      <p className="date">{updated_at}</p>
    </li>
  );
}
