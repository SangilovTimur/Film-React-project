import React from "react";
import CastItem from "../CastItem";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./CastList.module.css";
import { useEffect, useState } from "react";
export default function CastList() {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  const API_KEY = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    const apiCast = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=826ff55be219075fe0c51d998b696b2f&language=en-US`;
    axios.get(apiCast).then(async (response) => {
      const data = await response.data;
      const { cast } = data;
      setCast(cast);
    });
  }, [id]);
  return (
    <div className="container castWrapper">
      {cast && (
        <>
          <ul className="castList">
            {cast.map((item) => (
              <CastItem key={item.id} {...item} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
