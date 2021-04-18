import React, { useEffect, useState } from "react";
import "./Testimonials.css";
import Review from "./Review";

const Testimonials = () => {
  const [reviewsList,  setReviewList] = useState([]);
  useEffect( () => {
      fetch('http://localhost:5058/reviews')
      .then(res => res.json())
      .then(data => setReviewList(data))
  }, [])
  return (
    <div className="bg-light mt-5">
      <div className="container">
        <h2 className="text-center py-3">Testimonials</h2>
        <div className="row py-4">
            {
              reviewsList.map( rvw => <Review key={rvw._id} rvw={rvw}></Review>)
            }
        </div>
      </div>
    </div>
  );
};


export default Testimonials;
