import React from "react";
import whyStar from "../../../images/why-star.png";

const WhyStarLaundry = () => {
  return (
    <div className="container">
        <h2 className="text-center py-5">
          Why Choose <span className="text-info">Star Laundry</span>
        </h2>
      <div className="row">
        <div className="col-md-6">
            <div className="p-3">
                <img className="w-100 rounded" src={whyStar} alt="Why Star Laundry" />
            </div>
          
        </div>
        <div className="col-md-6">
          <div className="p-3">
            <h4>
              Being perfectly dressed gives a tranquility that no religion can
              bestow.
            </h4>
            <p>
              The way you dress and carry yourself sends a message to everyone
              around you. Your clothing and outward appearance shape assumptions
              about your personality, your education level, your individuality
              and the type of person you are.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyStarLaundry;
