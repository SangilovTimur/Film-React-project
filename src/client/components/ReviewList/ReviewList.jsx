import React from "react";
import { useEffect, useState } from "react";
import ReviewItem from "../ReviewItem";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ReviewsList() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const apiReviews = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=826ff55be219075fe0c51d998b696b2f&language=en-US&page=1`;
    axios.get(apiReviews).then(async (response) => {
      const data = await response.data;
      const { results } = data;
      console.log(response);
      setReviews(results);
    });
  }, [id]);
  return (
    <div className="container ">
      {reviews && (
        <>
          <ul className="reviewsList">
            {reviews.map((item) => (
              <ReviewItem key={item.id} {...item} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
