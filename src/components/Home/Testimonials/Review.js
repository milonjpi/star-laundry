import React from "react";

const Review = ({rvw}) => {
    const { photoURL, reviewerName, reviewDescription } = rvw;
  return (
    <div className="col-md-4">
      <div className="text-center">
        <img className="rounded-circle TestimonialImg" src={photoURL} alt={reviewerName} />
        <h3>{reviewerName}</h3>
        <p>
            <q> 
                <cite>
                    {reviewDescription}
                </cite>
            </q>
        </p>
      </div>
    </div>
  );
};

export default Review;
