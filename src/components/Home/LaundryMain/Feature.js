import React from "react";

const Feature = ({ft}) => {
    const { photo, title, tag } = ft;
  return (
    <div className="row align-items-center pt-4">
      <div className="col-2">
        <img className="featureImg" src={photo} alt={title} />
      </div>
      <div className="col-8">
        <h6 className="text-danger">{title}</h6>
        <h3 className="text-info">{tag}</h3>
      </div>
    </div>
  );
};

export default Feature;
