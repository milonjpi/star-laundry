import React from "react";

const Blogs = ({blog}) => {
  const { photo, title, description } = blog;
  return (
    <div className="col-md-4 mb-4">
      <img className="w-100 rounded" src={photo} alt={title} />
      <h2 className="pt-3">{title}</h2>
      <p>
        {description}
      </p>

      <div className="text-right">
        <button className="btn btn-primary">Continue Reading</button>
      </div>
    </div>
  );
};

export default Blogs;
