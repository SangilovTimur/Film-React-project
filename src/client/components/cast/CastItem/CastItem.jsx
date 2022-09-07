import React from "react";
import styles from "./CastItem.module.css";
import imageDef from "../../../../image/No_Image_Available.jpg";
export default function CastItem({ profile_path, name }) {
  return (
    <li className="CastItem">
      <img
        className="castImg"
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w500${profile_path}`
            : imageDef
        }
        alt="img"
      />
      <h2 className="CastItem__title">{name}</h2>
    </li>
  );
}
CastItem.defaultProps = {
  profile_path: imageDef,
};
